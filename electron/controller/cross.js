'use strict';

const { Controller } = require('ee-core');
const Cross = require('ee-core/cross');
const Log = require('ee-core/log');
const HttpClient = require('ee-core/httpclient');
const _ = require('lodash');
const Ps = require('ee-core/ps');
const path = require("path");
const Is = require('ee-core/utils/is');
const GetPort = require('ee-core/utils/get-port');

/**
 * Cross
 * @class
 */
class CrossController extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  /**
   * View process service information
   */
  info() {
    const pids = Cross.getPids();
    Log.info('cross pids:', pids);

    let num = 1;
    pids.forEach(pid => {
      let entity = Cross.getProc(pid);
      Log.info(`server-${num} name:${entity.name}`);
      Log.info(`server-${num} config:`, entity.config);
      num++;
    })

    return 'hello electron-egg';
  }

  /**
   * Get service url
   */  
  async getUrl(args) {
    const { name } = args;
    const serverUrl = Cross.getUrl(name);
    return serverUrl;
  }

  /**
   * kill service
   * By default (modifiable), killing the process will exit the electron application.
   */  
  async killServer(args) {
    const { type, name } = args;
    if (type == 'all') {
      Cross.killAll();
    } else {
      Cross.killByName(name);
    }

    return;
  }

  /**
   * create service
   * In the default configuration, services can be started with applications. 
   * Developers can turn off the configuration and create it manually.
   */   
  async createServer() {

    // method 1: Use the default Settings
    //const entity = await Cross.run(serviceName);

    // method 2: Use custom configuration
    const serviceName = "go";
    const opt = {
      name: 'goapp',
      appExit: false,
    }
    const entity = await Cross.run(serviceName, opt);

    Log.info('server name:', entity.name);
    Log.info('server config:', entity.config);
    Log.info('server url:', Cross.getUrl(entity.name));

    return;
  }

  /**
   * create java server
   */
  async createJavaServer() {

    const serviceName = "java";
    const jarPath = path.join(Ps.getExtraResourcesDir(), 'java-app.jar');
    // let javaOptStr = '-jar -server -Xms512M -Xmx512M -Xss512k -Dspring.profiles.active=prod -Dserver.port=${port} -Dlogging.file.path="${path}" ${jarPath}';
    // javaOptStr = _.replace(javaOptStr, "${jarPath}", jarPath);
    // javaOptStr = _.replace(javaOptStr, "${port}", 18080);
    // javaOptStr = _.replace(javaOptStr, "${path}", Ps.getLogDir());

    //const javaPort = await GetPort({ port: 18080 });
    const opt = {
      name: 'javaapp',
      cmd: path.join(Ps.getExtraResourcesDir(), 'jre1.8.0_201/bin/javaw.exe'),
      directory: Ps.getExtraResourcesDir(),
      //args: [javaOptStr],
      args: ['-jar', '-server', '-Xms512M', '-Xmx512M', '-Xss512k', '-Dspring.profiles.active=prod', `-Dserver.port=18080`, `-Dlogging.file.path=${Ps.getLogDir()}`, `${jarPath}`],
      appExit: false,
    }
    if (Is.macOS()) {
      opt.cmd = path.join(Ps.getExtraResourcesDir(), 'jre1.8.0_201/Contents/Home/bin/java');
    }

    const entity = await Cross.run(serviceName, opt);

    Log.info('server name:', entity.name);
    Log.info('server config:', entity.config);
    Log.info('server url:', Cross.getUrl(entity.name));

    return;
  }

  /**
   * Access the api for the cross service
   */
  async requestApi(args) {
    const { name, urlPath, params} = args;
    const hc = new HttpClient();
    const serverUrl = Cross.getUrl(name);
    console.log('Server Url:', serverUrl);

    const apiHello = serverUrl + urlPath;
    const options = {
      method: 'GET',
      data: params || {},
      dataType: 'json',
      timeout: 1000,  
    };
    const result = await hc.request(apiHello, options);

    return result.data;
  }
}

CrossController.toString = () => '[class CrossController]';
module.exports = CrossController;  
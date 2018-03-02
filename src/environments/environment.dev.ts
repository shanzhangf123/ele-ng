import { AppConfig } from './env.config';
console.log('dev');
export const environment: AppConfig = {
  hmr: false,
  production: false,
  apiPrefix: 'api',
  homepageUrl: 'home',
  domain: 'http://localhost/',
  staticResourceDomain: 'http://localhost:4200/',
  resourceDomain: 'http://devapi.blockbi.com/',
  resourceFolderDomain: 'http://devapi.blockbi.com/',
  resourceContactUsDomain: 'http://devadmin.blockbi.com/',
  socketDomain: 'ws://dev-bi-im.blockbi.com:9988/chat',
  requestByDomain: false,
  apiDomain: 'http://devapi.blockbi.com',
  debug: true,
  socketReconnectInterval: 1000,
  socketReconnectMaxNum: 5,
  socketKeepOnlineInterval: 25000
};

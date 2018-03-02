import { AppConfig } from './env.config';
console.log('prod');
export const environment: AppConfig = {
  hmr: true,
  production: true,
  homepageUrl: 'home',
  apiPrefix: 'api',
  domain: 'https://www.blockbi.com/',
  staticResourceDomain: 'https://www.blockbi.com/',
  resourceDomain: 'https://api.blockbi.com/',
  resourceFolderDomain:  'https://api.blockbi.com/',
  resourceContactUsDomain:  'http://admin.blockbi.com/',
  socketDomain: 'wss://api.blockbi.com/chat',
  requestByDomain: true,
  apiDomain : 'https://api.blockbi.com',
  debug: false,
  socketReconnectInterval: 1000,
  socketReconnectMaxNum: 5,
  socketKeepOnlineInterval: 25000
};

import { AppConfig } from './env.config';
console.log('uat');
export const environment: AppConfig = {
  hmr: false,
  production: false,
  apiPrefix: 'api',
  homepageUrl: 'home',
  domain: 'https://uatwww.blockbi.com/',
  staticResourceDomain: 'https://uatwww.blockbi.com/',
  resourceDomain: 'https://uatapi.blockbi.com/',
  resourceFolderDomain:  'https://uatapi.blockbi.com/',
  resourceContactUsDomain:  'http://uatadmin.blockbi.com/',
  socketDomain: 'wss://uatapi.blockbi.com/chat',
  requestByDomain: true,
  apiDomain : 'https://uatapi.blockbi.com',
  debug: true,
  socketReconnectInterval: 1000,
  socketReconnectMaxNum: 5,
  socketKeepOnlineInterval: 25000
};

import { AppConfig } from './env.config';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
console.log('default');
export const environment: AppConfig = {
  hmr: false,
  production: false,
  homepageUrl: 'home',
  apiPrefix: 'api',
  domain: 'http://localhost/',
  staticResourceDomain: 'http://localhost:3000/',
  resourceDomain: 'http://devapi.blockbi.com/',
  resourceFolderDomain:  'http://devapi.blockbi.com/',
  resourceContactUsDomain:  'http://devadmin.blockbi.com/',
  socketDomain: 'ws://dev-bi-im.blockbi.com:9988/chat',
  requestByDomain: false,
  apiDomain : 'http://devapi.blockbi.com',
  debug: true,
  socketReconnectInterval: 1000,
  socketReconnectMaxNum: 5,
  socketKeepOnlineInterval: 25000
};

import { InjectionToken } from '@angular/core';

export interface AppConfig {
  hmr: boolean;
  production: boolean;
  homepageUrl: string;
  apiPrefix: string;
  domain: string;
  staticResourceDomain: string;
  resourceDomain: string;
  resourceFolderDomain: string;
  resourceContactUsDomain: string;
  socketDomain: string;
  requestByDomain: boolean;
  apiDomain: string;
  debug: boolean;
  socketReconnectInterval: number; // 断线重连间隔时间(豪秒)
  socketReconnectMaxNum: number;  // 重连最大重连次数
  socketKeepOnlineInterval: number; // 用户心跳保持间隔时间,豪秒
}

export let APP_CONFIG = new InjectionToken<AppConfig>('env.config');

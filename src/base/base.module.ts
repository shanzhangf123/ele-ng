import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { PersistenceModule } from 'angular-persistence';
// import { TranslateModule } from '@ngx-translate/core';

import { ApiService } from './service/api.service';
// import { BiLogService } from './debug/bi-log.service';
// import { ModuleHeaderComponent } from './components/bi-header/bi-header.component';
// import { UserService } from './service/user.service';
// import { UserStorageService } from './storage/user-storage.service';
// import { BiTranslateService } from './service/bi-translate.service';
// import { WebsocketService } from './service/websocket.service';



const PROVIDERS =  [
  ApiService, 
//   BiLogService,
//    UserService
];
/**
 *
 * 共享Service模块
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  declarations: [],
  providers: PROVIDERS
})
export class BaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BaseModule,
      providers: [
        // {provide: UserService, useClass: UserService},
        // {provide: UserStorageService, useClass: UserStorageService},
        // {provide: ApiService, useClass: ApiService},
        // {provide: BiLogService, useClass: BiLogService},
        // {provide: BiTranslateService, useClass: BiTranslateService},
        // {provide: WebsocketService, useClass: WebsocketService}
      ]
    };
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
// import { LoginComponent } from './login/login.component';
import { BaseModule } from '../base/base.module';
import { environment } from '../environments/environment';
import { AppConfig, APP_CONFIG } from '../environments/env.config';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { appRoutes, routing } from './app.router';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ElModule.forRoot(),
    BaseModule.forRoot(),
    routing
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

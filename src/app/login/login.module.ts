import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LoginRoutingModule } from './login-routing.module';
// import { LoginComponent } from './components/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.router';
import { ElModule } from 'element-angular';
import { BaseModule } from '../../base/base.module';
// import { BiThemeModule } from '../bi-theme/bi-theme.module';
// import { TranslateModule } from '@ngx-translate/core';
// import { SharedModule } from '../../../core/modules/shared.module';

@NgModule({
    imports: [
        // SharedModule,
        BaseModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        ElModule.forRoot(),
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }

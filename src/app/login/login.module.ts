import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LoginRoutingModule } from './login-routing.module';
// import { LoginComponent } from './components/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.router';
// import { BiThemeModule } from '../bi-theme/bi-theme.module';
// import { TranslateModule } from '@ngx-translate/core';
// import { SharedModule } from '../../../core/modules/shared.module';

@NgModule({
    imports: [
        // SharedModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
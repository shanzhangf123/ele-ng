import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// import { LoginComponent } from './da.component';
// import { routes } from './login.router';


@NgModule({
    imports: [
        FormsModule,
    ],
    exports: [
        DashboardComponent,
    ],
    declarations: [
        DashboardComponent,
    ],
    bootstrap: []
})

export class DashboardModule {
    // public static routes = routes;
}

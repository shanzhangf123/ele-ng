import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './_authGuard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { DashboradComponent } from './main/pages/dashboard/components/dashborad.component';
// import { ChatComponent } from './main/pages/chat/chat/chat.component';

export const appRoutes: Routes = [
    // {
    //     path: 'dashboard', component: DashboardComponent
    // },
    // {
    //     path: 'login', component: LoginComponent
    // },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    // { path: 'auth/login', component: LoginComponent },
    // { path: 'auth/register', loadChildren: 'app/main/pages/register/register.module#RegisterModule' },
    // {
    //     path: 'default', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuard], pathMatch: 'full'
    // },
    // { path: 'user/:id', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuard], pathMatch: 'full' },
    // { path: 'channel/:id', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuard], pathMatch: 'full' },
    // { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);
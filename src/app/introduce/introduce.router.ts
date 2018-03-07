import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroduceModule } from './introduce.module';

const routes: Routes = [
    { path: '', component: IntroduceModule }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }

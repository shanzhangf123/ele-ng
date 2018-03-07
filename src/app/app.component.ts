import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bi-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public isShowLogin: boolean;

  constructor(public router: Router) {

  }



  /**
   * 登录
   */
  login() {
    console.log('点击登录');
    // this.isShowLogin = true;
    // this.router.navigate(['/login']);
  }



}

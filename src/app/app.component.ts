import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bi-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isShowIntro: boolean = true;

  constructor(public router: Router) {
    console.log('app component页面初始化');
    console.log('>>>>>>', this.router);
    console.log('>>>>>>', this.router.url);
    this.isShowIntro == (this.router.url == '/' )
  }


  /**
   * 隐藏介绍部分
   */
  hideIntro() {
    console.log('隐藏介绍部分');
    this.isShowIntro = false;
  }



}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isShowLogin: boolean;



  /**
   * 登录
   */
  login() {
    console.log('点击登录');
    this.isShowLogin = true;
  }


  handle(){
    console.log('关闭对话框');
  }
  
}

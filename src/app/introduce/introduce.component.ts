import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {


  @Output() outputHideIntro = new EventEmitter(); //隐藏介绍页面

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }



  login(event: any) {
    console.log('点击登录');
    this.router.navigate(['/login']);
    this.outputHideIntro.emit(event);



  }
}

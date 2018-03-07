import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bi-header',
  templateUrl: './bi-header.component.html',
  styleUrls: ['./bi-header.component.scss']
})
export class BiHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('bi-header')
  }


  handle(index: any) {
    switch (index) {
      case '1':
      console.log('跳转到聊天首页');
      this.router.navigate(['/dashboard'])
      break;
      case '5':
        console.log('跳转到聊天页面');
        this.router.navigate(['/chat'])
        break;

      default:

        break;


    }
  }

}

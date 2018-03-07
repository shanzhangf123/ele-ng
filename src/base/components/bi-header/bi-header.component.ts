import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bi-header',
  templateUrl: './bi-header.component.html',
  styleUrls: ['./bi-header.component.scss']
})
export class BiHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('bi-header')
  }


  handle(index: any) {
    console.log('??????', index);
  }

}

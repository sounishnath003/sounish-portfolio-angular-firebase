import { Component, OnInit } from '@angular/core';
import * as aos from 'aos' ;
@Component({
  selector: 'app-developementBackpack',
  templateUrl: './developementBackpack.component.html',
  styleUrls: ['./developementBackpack.component.css']
})
export class DevelopementBackpackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    aos.init({
      duration: 900
    });

    
  }

}

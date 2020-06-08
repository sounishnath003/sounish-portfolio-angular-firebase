import { Component, OnInit } from '@angular/core';
import * as aos from 'aos' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    aos.init({
      delay: 600,
      easing: 'ease-in-quart'
    });
  }

}

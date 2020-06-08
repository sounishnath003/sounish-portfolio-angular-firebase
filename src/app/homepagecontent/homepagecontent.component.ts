import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepagecontent',
  templateUrl: './homepagecontent.component.html',
  styleUrls: ['./homepagecontent.component.css'],
})
export class HomepagecontentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init({
      duration: 900,
      offset: 200,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
}

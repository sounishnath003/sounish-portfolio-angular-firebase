import { Component, OnInit } from '@angular/core';
import * as aos from "aos";

@Component({
  selector: 'app-aBitAbout',
  templateUrl: './aBitAbout.component.html',
  styleUrls: ['./aBitAbout.component.css']
})
export class ABitAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    aos.init({
      duration: 900,
      delay: 100
    }) ;
  }

}

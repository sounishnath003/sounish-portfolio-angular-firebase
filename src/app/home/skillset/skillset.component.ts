import { Component, OnInit } from '@angular/core';
import * as aos from 'aos' ;

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    aos.init({

    }) ;
  }

}

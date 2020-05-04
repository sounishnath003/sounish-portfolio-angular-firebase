import { Component, OnInit, Input } from '@angular/core';
import { Repostitory } from 'src/app/services/repostitory';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css'],
})
export class ProjectcardComponent implements OnInit {
  @Input() repoData ;

  constructor() {
    console.log(this.repoData);

  }

  ngOnInit() {}
}

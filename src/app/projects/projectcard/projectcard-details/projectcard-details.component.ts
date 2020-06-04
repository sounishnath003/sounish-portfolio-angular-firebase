import { Component, OnInit, Input } from '@angular/core';
import { Repostitory } from 'src/app/services/repostitory';

@Component({
  selector: 'app-projectcard-details',
  templateUrl: './projectcard-details.component.html',
  styleUrls: ['./projectcard-details.component.css']
})
export class ProjectcardDetailsComponent implements OnInit {
  @Input() repoDetails: Repostitory ;

  constructor() { }

  ngOnInit() {
  }

}

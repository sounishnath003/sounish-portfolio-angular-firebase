import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  date: any ;
  dt: Date = new Date() ;

  constructor() {
    this.date = this.dt.getMonth() + ' ' + this.dt.getDate() + ', ' + this.dt.getFullYear() ;
   }

  ngOnInit() {
  }

}

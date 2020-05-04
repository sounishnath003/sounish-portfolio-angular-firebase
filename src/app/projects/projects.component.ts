import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Repostitory } from '../services/repostitory';
import { ApiData } from '../services/apiData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  date: any;
  dt: Date = new Date();
  allData: Repostitory[] ;
  allRepositoryData: Repostitory;

  constructor(private githubServices: GithubService) {
    this.calculateDate();
    this.getReopos();
  }

  calculateDate() {
    return (this.date =
      this.dt.getMonth() +
      ' ' +
      this.dt.getDate() +
      ', ' +
      this.dt.getFullYear());
  }

  getReopos() {
    this.githubServices.fetchRepoData().subscribe(res => {
      this.allRepositoryData = res ;
    });
  }

  ngOnInit() {}
}

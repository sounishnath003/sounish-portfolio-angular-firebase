import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Repostitory } from '../services/repostitory';
import { ApiData } from '../services/apiData';
import { FirebaseService } from '../services/firebase.service';
import { fadeInItems } from '@angular/material/menu';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  date: any;
  dt: Date = new Date();
  allRepos: Repostitory[];

  constructor(private _firebaseService: FirebaseService) {
    this.calculateDate();
  }

  ngOnInit() {
    this._getAllReposFromFirebase();
    console.log(this.allRepos);
    
  }

  calculateDate() {
    return (this.date =
      this.dt.getMonth() +
      ' ' +
      this.dt.getDate() +
      ', ' +
      this.dt.getFullYear());
  }

  // Calling Firebase
  _getAllReposFromFirebase() {
    this._firebaseService.getReposFromFireBase().subscribe((res) => {
      this.allRepos = res.map(items => {
        return {
          id: items.payload.doc.id,
          ...items.payload.doc.data()
        } as Repostitory 
      });
    });
  }
}

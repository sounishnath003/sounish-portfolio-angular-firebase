import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Language } from 'src/app/services/Language';
import * as aos from 'aos' ;

@Component({
  selector: 'app-toolsIuse',
  templateUrl: './toolsIuse.component.html',
  styleUrls: ['./toolsIuse.component.css']
})
export class ToolsIuseComponent implements OnInit {
  languages: Language[] ;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    aos.init({
      duration: 825,
      delay: 50,
      offset: 60
    });
    this.getAllLanguages() ;
  }

  getAllLanguages() {
    this._firebaseService.getLanguagesFromFirebase().subscribe((res) => {
      this.languages = res ;
    })
  }

}

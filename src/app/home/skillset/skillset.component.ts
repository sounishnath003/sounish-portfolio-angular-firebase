import { Component, OnInit } from '@angular/core';
import * as aos from 'aos' ;
import { FirebaseService } from 'src/app/services/firebase.service';
import { Language } from 'src/app/services/Language';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    // this._getAllSkillSets() ;
    aos.init({

    }) ;
    
  }

  _getAllSkillSets() {
   
  }

}

import { Component, OnInit } from '@angular/core';
import * as aos from 'aos' ;
import { FirebaseService } from 'src/app/services/firebase.service';
import { Skillset } from 'src/app/services/skillset';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  skillsets: Skillset[] ;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._getAllSkillSets() ;
    aos.init({

    }) ;
    
  }

  _getAllSkillSets() {
    this._firebaseService.getSkillSetsFromFirebase().subscribe((res) => {
      this.skillsets = res as Skillset[] ;
    })
  }

}

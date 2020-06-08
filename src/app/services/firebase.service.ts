import { Injectable } from '@angular/core';
import { Repostitory } from './repostitory';
import { AngularFirestore } from '@angular/fire/firestore';
import { Skillset } from './skillset';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  allRepos: Repostitory[] ;
  skillsets: Skillset[] ;

  constructor(private _firestore: AngularFirestore) { }

  getReposFromFireBase() {
    return this._firestore.collection<Repostitory>('repos').snapshotChanges() ;
  }

  getSkillSetsFromFirebase() {
    return this._firestore.collection('skillsets').valueChanges() ;
  }

}

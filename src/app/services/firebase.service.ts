import { Injectable } from '@angular/core';
import { Repostitory } from './repostitory';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  allRepos: Repostitory[]

  constructor(private _firestore: AngularFirestore) { }

  getReposFromFireBase() {
    return this._firestore.collection<Repostitory>('repos').snapshotChanges() ;
  }

}

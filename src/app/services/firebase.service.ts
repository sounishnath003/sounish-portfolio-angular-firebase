import { Injectable } from '@angular/core';
import { Repostitory } from './repostitory';
import { AngularFirestore } from '@angular/fire/firestore';
import { Language } from './Language';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private _firestore: AngularFirestore) {}

  getReposFromFireBase() {
    return this._firestore.collection<Repostitory>('repos').snapshotChanges();
  }

  getLanguagesFromFirebase() {
    return this._firestore.collection<Language>('tools').valueChanges();
  }
}

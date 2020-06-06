import { Component, OnInit, Input } from '@angular/core';
import { Repostitory } from 'src/app/services/repostitory';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-projectcard-details',
  templateUrl: './projectcard-details.component.html',
  styleUrls: ['./projectcard-details.component.css']
})
export class ProjectcardDetailsComponent implements OnInit {
  @Input() repoDetails: Repostitory ;
  repo_name_url: string ;
  _docId: any ;
  repoDetail: Repostitory ;

  constructor(private _router : ActivatedRoute, private _firestore: AngularFirestore) {
    
  }

  ngOnInit() {
    this.repo_name_url = this._router.snapshot.paramMap.get('repoName');
    this._docId = this._router.snapshot.paramMap.get('docId');
    this._fetchCurRepoDetails(this._docId) ;
  }

  _fetchCurRepoDetails(docId: any) {
    this._firestore.collection('repos').doc(docId).get().subscribe(res => {
     return this.repoDetail = res.data() as Repostitory ;
    }) ;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Repostitory } from 'src/app/services/repostitory';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  youtube_link: string ;
  urlSafe: SafeResourceUrl ;
  github_projectUrl: string ;
  githubUrlSafe: SafeResourceUrl ;

  constructor(private _router : ActivatedRoute, private _firestore: AngularFirestore, public _santizier: DomSanitizer) {
    
  }

  ngOnInit() {
    this.repo_name_url = this._router.snapshot.paramMap.get('repoName');
    this._docId = this._router.snapshot.paramMap.get('docId');
    this._fetchCurRepoDetails(this._docId) ;
  }

  _fetchCurRepoDetails(docId: any) {
    this._firestore.collection('repos').doc(docId).get().subscribe(res => {
     this.repoDetail = res.data() as Repostitory ;
     this.youtube_link = this.repoDetail.youtube_link ;
     this.github_projectUrl = this.repoDetail.project_url ;
     this.urlSafe = this._santizier.bypassSecurityTrustResourceUrl(
       this.youtube_link
     );
     this.githubUrlSafe = this._santizier.bypassSecurityTrustResourceUrl(this.github_projectUrl) ;
    }) ;
  }

}

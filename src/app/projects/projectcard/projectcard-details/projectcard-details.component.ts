import { Component, OnInit, Input } from '@angular/core';
import { Repostitory } from 'src/app/services/repostitory';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-projectcard-details',
  templateUrl: './projectcard-details.component.html',
  styleUrls: ['./projectcard-details.component.css']
})
export class ProjectcardDetailsComponent implements OnInit {
  @Input() repoDetails: Repostitory ;
  repo_name_url: string ;

  constructor(private _router : ActivatedRoute) {
    
  }

  ngOnInit() {
    this.repo_name_url = this._router.snapshot.paramMap.get('repoName');
  }

}

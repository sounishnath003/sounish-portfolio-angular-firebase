import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  @Input() image: string ;
  @Input() title: string ;
  @Input() desc: string ;

  constructor() { }

  ngOnInit() {
  }

}

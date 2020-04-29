import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css']
})
export class HerosectionComponent implements OnInit {
  @Input() title: string ;
  @Input() subtitle: string ;

  constructor() { }

  ngOnInit() {
  }

}

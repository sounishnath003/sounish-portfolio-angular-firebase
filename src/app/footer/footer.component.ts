import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number ;
  datetime: Date = new Date() ;

  constructor() {
    this.year = this.datetime.getFullYear() ;
   }

  ngOnInit() {
    
  }

}

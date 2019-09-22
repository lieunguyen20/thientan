import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  active: string;
  constructor() { }

  ngOnInit() {
    this.active=window.location.pathname ;
    console.log(window.location.pathname);
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {
  menuName: string;
  constructor() { }

  ngOnInit() {
    this.menuName = 'All';
  }

  setActiveMenu(name: string):void{
    switch(name)
    {
      case 'All': this.menuName = 'All' ;
      console.log(name);
        break;
      case 'Photography': this.menuName ='Photography';
      console.log(name);
        break;
      default : 
        break;
    }

  }
 
}

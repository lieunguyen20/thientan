import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
@Component({
  selector: 'app-shoot-landscape',
  templateUrl: './shoot-landscape.component.html',
  styleUrls: ['./shoot-landscape.component.scss']
})
export class ShootLandscapeComponent implements OnInit {
  _displayView: string;
  _Cloopen : string;
  numOfClicks = 0;
  constructor() { }

  ngOnInit(): void {
    this._displayView = 'beginer-tips-view';
    this._Cloopen = 'open';

  }
  leftclick(){
    console.log("-500");
    document.querySelector('div.scrollWrapper').scrollLeft -=500;
  }
  rightclick(){
    console.log("+500");
    document.querySelector('div.scrollWrapper').scrollLeft +=500;
  }

  onclick():void{
    this.numOfClicks++;
    if(this.numOfClicks %2 !=0)
      {
        this._Cloopen = 'close';
      }
      else
      this._Cloopen = 'open';


   
  }
  changeView(nameView: string): void{
    this._displayView = nameView;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent implements OnInit {
  activeSection: string;
  article: string;
  numOfClicks = 0;
  constructor() { }

  ngOnInit() {
    this.activeSection = 'Popular';
    
  }
  setActive(section: string):void{
    this.article = null;
    this.activeSection = section;
    console.log(section);
  }
  toggleQuestion(number: string):void{
    
    switch(number)
    {
     
        case '1':
           
          this.numOfClicks ++;
          if(this.numOfClicks %2 !=0)
      {
        this.article = 'showanswer1'; 
      }
      else
     { this.article = ''; }
           
        break;
        case '2':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer2'; 
    }
    else
   { this.article = ''; }
        break;
        case '3':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer3'; 
    }
    else
   { this.article = ''; }
        break;
        case '4':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer4'; 
    }
    else
   { this.article = ''; }
        break;
        case '5':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer5'; 
    }
    else
   { this.article = ''; }
        break;
        case '6':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer6'; 
    }
    else
   { this.article = ''; }
        break;
        case '7':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer7'; 
    }
    else
   { this.article = ''; }
        break;
        case '8':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer8'; 
    }
    else
   { this.article = ''; }
        break;
        case '9':  this.numOfClicks ++;
        if(this.numOfClicks %2 !=0)
    {
      this.article = 'showanswer9'; 
    }
    else
   { this.article = ''; }
        break;
      

        default:
          break;
    }
    
  }

}

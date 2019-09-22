import { Component, OnInit ,HostListener ,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edu-advantage',
  templateUrl: './edu-advantage.component.html',
  styleUrls: ['./edu-advantage.component.scss']
})
export class EduAdvantageComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
    $(function() {
      
      $("header").hide();
  });

  window.addEventListener('scroll', this.scroll, true); //third parameter

  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

scroll = (event: any): void => {
  // Here scroll is a variable holding the anonymous function 
  // this allows scroll to be assigned to the event during onInit
  // and removed onDestroy
  // To see what changed:
  const number = event.srcElement.scrollTop;
  
  if (number >140 )
  {
    let element = document.getElementById('headd');
    element.classList.add('edu-header-scrolled');
  }
  else
  {
    let element = document.getElementById('headd');
        element.classList.remove('edu-header-scrolled'); 
  }
};



}

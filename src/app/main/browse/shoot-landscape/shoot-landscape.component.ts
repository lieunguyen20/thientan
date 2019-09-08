import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import 'slick-carousel';
declare const $: any;

@Component({
  selector: 'app-shoot-landscape',
  templateUrl: './shoot-landscape.component.html',
  styleUrls: ['./shoot-landscape.component.scss']
})
export class ShootLandscapeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {

   $(document).ready(() => {


     $('.slick-list').slick({
       dots: true,
       fade: true,
       arrows: true,
       autoplay: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
     });



    
  })}


}

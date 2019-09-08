import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import 'slick-carousel';
declare const $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $("header").show();
  });

   $(document).ready(() => {
     $('.slick-list').slick({
       dots: true,
       fade: true,
       arrows: true,
       autoplay: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
     });
    });
  }

}

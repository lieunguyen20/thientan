import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(() => {
      
      $(document).scroll((e) => {
        debugger;
        let st = e.currentTarget.scrollTop;
        if (st >= 50) {
          // downscroll
          $('.sticky').addClass('stickyVisible');
  
        } else if (st === 0) {
          // upscroll code
          $('.sticky').removeClass('stickyVisible');
        }
  
      });
      
    });

  }

}

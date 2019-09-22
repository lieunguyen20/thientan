import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.scss']
})
export class TelevisionsComponent implements OnInit { dataRegular: string;
  dataHover: string;
  constructor() { }

  ngOnInit() {
    

    $(document).ready(() => {
      $('h3').click(function() {
       
          $(this).parent('.js-filter').toggleClass('js-shown js-hidden');
        
      });

      // $('.js-listImage').load((e) => {
      //   debugger;
      //   this.dataRegular = $('.js-listImage').attr('data-src');
      //   if (this.dataRegular !== null && this.dataRegular !== undefined) {
      //     $('.js-listImage').attr('assets/images/itemImgPlaceholder.jpg', this.dataHover);
      //   }
      // });

      $('img').one('load', (e) => {
        if (e.currentTarget.classList.contains('js-listImage')){
          this.dataRegular = e.currentTarget.getAttribute('data-src');
          if (this.dataRegular !== null && this.dataRegular !== undefined) {
            e.currentTarget.setAttribute('src', this.dataRegular);
          }
        }
      });

      $('.js-listImage').mouseover((e) => {
        this.dataHover  = e.currentTarget.getAttribute('data-hover-src');
        e.currentTarget.setAttribute('src', this.dataHover);
      }).mouseout((e) => {
        this.dataRegular = e.currentTarget.getAttribute('data-regular-src');
        e.currentTarget.setAttribute('src', this.dataRegular);
      });
    
  
  });

  }

}

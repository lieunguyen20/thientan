import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements  OnInit, OnDestroy {
  fuseConfig: any;
  navigation: any;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   */
  constructor(
    private _fuseConfigService: FuseConfigService
  ) {
    // Set the defaults
    this.navigation = navigation;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  ngOnInit(): void {
    // Subscribe to config changes
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.fuseConfig = config;
      });

      $(document).ready(() => {
      
        $('li').mouseover((e) => {
          let id = e.currentTarget.id;
          if (id.startsWith('cat')) {
            if (!e.currentTarget.classList.contains('active-menu')){
              e.currentTarget.classList.add('active-menu');
            }
            
          }
  
        }).mouseout((e) => {
          let id = e.currentTarget.id;
  
          if (id.startsWith('cat')) {
            if (e.currentTarget.classList.contains('active-menu')) {
              e.currentTarget.classList.remove('active-menu');
            }
  
          }
  
        });
  
  
        $('.site-links').click(() => {
          $('.js-siteLinksDropdown').addClass('showDropdown');
        }).mouseleave(() => {
          $('.js-siteLinksDropdown').removeClass('showDropdown');
        });
  
        $('p.searchContainer input').blur(() => {
          $('header form.search').removeClass('focus');
        }).focus(() => {
          $('header form.search').addClass('focus');
        });
  
        $('.user.login-account').mouseenter((e) => {
          $('#account-cart').addClass('js-topNavNotification');
          $('.cart-alert-tab.js-cart-alert-tab').addClass('js-show');
  
        }).mouseleave((e) => {
          $('#account-cart').removeClass('js-topNavNotification');
          $('.cart-alert-tab.js-cart-alert-tab').removeClass('js-show');
        });
  
        $('.header-cart.topNavCart').mouseenter((e) => {
          $('#account-cart').addClass('js-topNavCart');
          $('.cart-alert-tab.js-cart-alert-tab').addClass('js-show');
  
        }).mouseleave((e) => {
          $('#account-cart').removeClass('js-topNavCart');
          $('.cart-alert-tab.js-cart-alert-tab').removeClass('js-show');
        });

        $('account-notifications').mouseenter(() => {
          $(".user.login-account").trigger('mouseenter');
        }).mouseleave(() => {
          $(".user.login-account").trigger('mouseleave');
        });

        $('mini-cart').mouseenter(() => {
          $('.header-cart.topNavCart').trigger('mouseenter');
        }).mouseleave(() => {
          $('.header-cart.topNavCart').trigger('mouseleave');
        })
  
      });

  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}

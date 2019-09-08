import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';

import * as $ from 'jquery'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit, OnDestroy {
  fuseConfig: any;
  navigation: any;
  clikedTab: String;
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
          if (!e.currentTarget.classList.contains('active-menu')) {
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

      // Link site
      $('.site-links').click(() => {
        $('.js-siteLinksDropdown').addClass('showDropdown');
      }).mouseleave(() => {
        $('.js-siteLinksDropdown').removeClass('showDropdown');
      });

      // Search
      $('p.searchContainer input').blur(() => {
        $('header form.search').removeClass('focus');
      }).focus(() => {
        $('header form.search').addClass('focus');
      });

      // My Account and My Cart
      $('.user.login-account').mouseenter((e) => {
        this.clikedTab = 'js-topNavNotification';
        //$('#account-cart').addClass('js-topNavNotification');
        //$('.cart-alert-tab.js-cart-alert-tab').addClass('js-show');

      });

      $('.header-cart.topNavCart').mouseenter((e) => {
        this.clikedTab = 'js-topNavCart';
        //$('#account-cart').addClass('js-topNavCart');
        //$('.cart-alert-tab.js-cart-alert-tab').addClass('js-show');
      });



      $('#account-cart').mouseover((e) => {
        if ($('#account-cart').hasClass(this.clikedTab.toString())) {
          $('#account-cart').removeClass(this.clikedTab.toString());
        }
        if ($('.cart-alert-tab.js-cart-alert-tab').hasClass('js-show')) {
          $('.cart-alert-tab.js-cart-alert-tab').removeClass('js-show');
        }

        $('#account-cart').addClass(this.clikedTab.toString());
        $('.cart-alert-tab.js-cart-alert-tab').addClass('js-show');

      }).mouseout(() => {
        $('#account-cart').removeClass('js-topNavNotification');
        $('.cart-alert-tab.js-cart-alert-tab').removeClass('js-show');
        $('#account-cart').removeClass('js-topNavCart');
      });

    });

  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';

@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.scss']
})
export class LensesComponent implements OnInit{
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

  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}

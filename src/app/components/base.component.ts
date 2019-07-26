import {
  OnInit,
  Inject,
  Injector,
  OnChanges,
  DoCheck,
  AfterContentChecked
} from '@angular/core';
import { OnDestroy, AfterContentInit, SimpleChanges } from '@angular/core/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
export class BaseComponent
  implements
    OnInit,
    AfterContentChecked,
    DoCheck,
    OnChanges,
    OnDestroy,
    AfterContentInit {
  public _dataService: DataService;
  public _router: Router;
  public _activatedRoute: ActivatedRoute;

  constructor(@Inject(Injector) injector: Injector) {
    this._dataService = injector.get(DataService);
    this._router = injector.get(Router);
    this._activatedRoute = injector.get(ActivatedRoute);
  }

  ngOnInit() {}

  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    // this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add 'implements OnChanges' to the class.
  }

  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
  }
  ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
  }
}

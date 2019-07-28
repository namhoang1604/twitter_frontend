import { Component, OnInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TweetFormComponent } from '../components/tweet-form/tweet-form.component';
import { BaseComponent } from '../components/base.component';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../root-store';
import { UserStoreActions, UserStoreSelectors } from '../root-store/user-store';
import { PhoenixChannelService } from '../services/phoenix-channel/phoenix-channel.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent extends BaseComponent implements OnInit {
  user$: any;
  constructor(
    injector: Injector,
    private store$: Store<RootStoreState.RootState>,
    public dialog: MatDialog
  ) {
    super(injector);
  }

  ngOnInit() {
    new PhoenixChannelService();
    this.user$ = this.store$.select(UserStoreSelectors.selectUser);
    this.store$.dispatch(new UserStoreActions.GenerateUserAction());
  }

  openDialogToCreateTweet(): void {
    const dialogRef = this.dialog.open(TweetFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

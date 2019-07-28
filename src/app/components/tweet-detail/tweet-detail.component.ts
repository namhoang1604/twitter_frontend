import { Component, OnInit, Input, Injector } from '@angular/core';
import { Tweet } from '@src/app/models/tweet';
import { BaseComponent } from '../base.component';
import { Store } from '@ngrx/store';
import { RootStoreState } from '@src/app/root-store';
import { TweetStoreActions } from '@src/app/root-store/tweet-store';
import { UserStoreSelectors } from '@src/app/root-store/user-store';
import { UserState } from '@src/app/root-store/user-store/state';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.scss']
})
export class TweetDetailComponent extends BaseComponent implements OnInit {
  @Input() tweet: Tweet;
  user: UserState;

  constructor(
    injector: Injector,
    private store$: Store<RootStoreState.RootState>
  ) {
    super(injector);
  }

  ngOnInit() {
    this.store$
      .select(UserStoreSelectors.selectUser)
      .subscribe(user => (this.user = user));
  }

  isRetweeted(): boolean {
    return this.tweet.retweets.some(userID => this.user.userID === userID);
  }

  retweet() {
    this.store$.dispatch(
      new TweetStoreActions.TweetsRetweetAction({ id: this.tweet.id })
    );
  }
}

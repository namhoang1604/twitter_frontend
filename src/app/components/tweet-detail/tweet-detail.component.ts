import { Component, OnInit, Input, Injector, OnDestroy } from '@angular/core';
import { Tweet } from '@src/app/models/tweet';
import { BaseComponent } from '../base.component';
import { Store } from '@ngrx/store';
import { RootStoreState } from '@src/app/root-store';
import { TweetStoreActions } from '@src/app/root-store/tweet-store';
import { UserStoreSelectors } from '@src/app/root-store/user-store';
import { UserState } from '@src/app/root-store/user-store/state';
import { PhoenixChannelService } from '@src/app/services/phoenix-channel/phoenix-channel.service';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.scss']
})
export class TweetDetailComponent extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() tweet: Tweet;
  user: UserState;
  channel: any;

  constructor(
    injector: Injector,
    private store$: Store<RootStoreState.RootState>,
    private phoenixChannel: PhoenixChannelService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.store$
      .select(UserStoreSelectors.selectUser)
      .subscribe(user => (this.user = user));

    this.channel = this.phoenixChannel.joinTopic(`tweets:${this.tweet.id}`);
    this.channel.on('update_tweets', response =>
      this.store$.dispatch(
        new TweetStoreActions.TweetsUpdateTweetFromChannelAction({
          tweet: response.data
        })
      )
    );
    this.channel.join();
  }

  ngOnDestroy() {
    this.channel.leave();
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

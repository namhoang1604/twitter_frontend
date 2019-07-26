import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '@src/app/components/base.component';
import { Store } from '@ngrx/store';
import { RootStoreState } from '@src/app/root-store';
import {
  TweetStoreSelectors,
  TweetStoreActions
} from '@src/app/root-store/tweet-store';
import { Tweet } from '@src/app/models/tweet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  listTweet$: Observable<Tweet[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;
  constructor(
    injector: Injector,
    private store$: Store<RootStoreState.RootState>
  ) {
    super(injector);
  }

  ngOnInit() {
    this.listTweet$ = this.store$.select(TweetStoreSelectors.selectAllTweets);

    this.error$ = this.store$.select(TweetStoreSelectors.selectTweetError);

    this.isLoading$ = this.store$.select(
      TweetStoreSelectors.selectTweetIsLoading
    );

    this.store$.dispatch(new TweetStoreActions.TweetsRequestAction());
  }
}

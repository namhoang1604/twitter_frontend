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
  listTweet: Tweet[];
  error$: Observable<string>;
  isLoading$: Observable<boolean>;
  isLoading: boolean;
  queryObject = { limit: 10, page: 0 };
  constructor(
    injector: Injector,
    private store$: Store<RootStoreState.RootState>
  ) {
    super(injector);
  }

  ngOnInit() {
    this.listTweet$ = this.store$.select(TweetStoreSelectors.selectAllTweets);
    this.listTweet$.subscribe(listTweet => (this.listTweet = listTweet));

    this.error$ = this.store$.select(TweetStoreSelectors.selectTweetError);

    this.isLoading$ = this.store$.select(
      TweetStoreSelectors.selectTweetIsLoading
    );
    this.isLoading$.subscribe(isLoading => (this.isLoading = isLoading));

    this.store$.dispatch(
      new TweetStoreActions.TweetsRequestAction(this.queryObject)
    );
  }

  handleScroll(e) {
    const viewHeight = e.target.offsetHeight;
    const scrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;

    // If the user has scrolled within 300px of the bottom, add more data
    const buffer = 300;
    const limit = scrollHeight - viewHeight - buffer;
    const maxTweets = (this.queryObject.page + 1) * this.queryObject.limit;
    if (
      scrollLocation > limit &&
      !this.isLoading &&
      this.listTweet.length === maxTweets
    ) {
      this.queryObject.page++;
      this.store$.dispatch(
        new TweetStoreActions.TweetsRequestAction(this.queryObject)
      );
    }
  }
}

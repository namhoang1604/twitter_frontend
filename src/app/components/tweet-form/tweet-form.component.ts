import { Component, OnInit, Injector } from '@angular/core';
import { Tweet } from '@src/app/models/tweet';
import { Store } from '@ngrx/store';
import { RootStoreState } from '@src/app/root-store';
import { BaseComponent } from '../base.component';
import {
  TweetStoreActions,
  TweetStoreSelectors
} from '@src/app/root-store/tweet-store';
import { ActionTypes } from '@src/app/root-store/tweet-store/actions';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.scss']
})
export class TweetFormComponent extends BaseComponent implements OnInit {
  content = '';

  constructor(
    injector: Injector,
    private store$: Store<RootStoreState.RootState>,
    public dialogRef: MatDialogRef<TweetFormComponent>
  ) {
    super(injector);
  }

  ngOnInit() {}

  createTweet() {
    this.store$.select(TweetStoreSelectors.selectType).subscribe(type => {
      if (type === ActionTypes.CREATE_TWEETS_SUCCESS) {
        this.dialogRef.close();
      }
    });
    const tweet = new Tweet(this.content);
    this.store$.dispatch(new TweetStoreActions.TweetsCreateAction({ tweet }));
  }
}

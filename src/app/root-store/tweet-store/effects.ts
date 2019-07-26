import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as tweetAction from './actions';
import { DataService } from '@src/app/services/data/data.service';
import { Tweet, convertToClass } from '@src/app/models/tweet';

@Injectable()
export class TweetStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  tweetRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<tweetAction.TweetsRequestAction>(
      tweetAction.ActionTypes.TWEETS_REQUEST
    ),
    switchMap(action =>
      this.dataService.get('tweet').pipe(
        map(tweets => {
          const listTweet: Tweet[] = tweets.map(tweet => convertToClass(tweet));
          return new tweetAction.TweetsSuccessAction({
            tweets: listTweet
          });
        }),
        catchError(error =>
          observableOf(new tweetAction.TweetsFailureAction({ error }))
        )
      )
    )
  );
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import * as tweetAction from './actions';
import { DataService } from '@src/app/services/data/data.service';
import { Tweet, convertToClass, convertToJson } from '@src/app/models/tweet';
import { RootStoreState } from '..';
import { UserStoreSelectors } from '../user-store';

@Injectable()
export class TweetStoreEffects {
  constructor(
    private dataService: DataService,
    private actions$: Actions,
    private store$: Store<RootStoreState.RootState>
  ) {}

  @Effect()
  tweetRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<tweetAction.TweetsRequestAction>(
      tweetAction.ActionTypes.TWEETS_REQUEST
    ),
    switchMap(action =>
      this.dataService.get('tweets').pipe(
        map(response => {
          const listTweet: Tweet[] = response.data.map(tweet =>
            convertToClass(tweet)
          );
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

  @Effect()
  tweetCreateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<tweetAction.TweetsCreateAction>(
      tweetAction.ActionTypes.CREATE_TWEETS_REQUEST
    ),
    switchMap(action => {
      return this.store$.select(UserStoreSelectors.selectUser).pipe(
        mergeMap(userState => {
          const tweetJson = convertToJson({
            ...action.payLoad.tweet,
            ownerID: userState.userID,
            ownerName: userState.name
          });
          return this.dataService.post('tweets', { tweet: tweetJson }).pipe(
            map(response => {
              const tweet: Tweet = convertToClass(response.data);
              return new tweetAction.TweetsCreateSuccessAction({ tweet });
            }),
            catchError(error =>
              observableOf(new tweetAction.TweetsFailureAction({ error }))
            )
          );
        })
      );
    })
  );

  @Effect()
  tweetRetweetEffect$: Observable<Action> = this.actions$.pipe(
    ofType<tweetAction.TweetsRetweetAction>(
      tweetAction.ActionTypes.RETWEET_TWEETS_REQUEST
    ),
    switchMap(action => {
      return this.store$.select(UserStoreSelectors.selectUser).pipe(
        mergeMap(userState => {
          return this.dataService
            .post(`tweets/${action.payLoad.id}/retweet`, {
              user_id: userState.userID
            })
            .pipe(
              map(response => {
                const tweet: Tweet = convertToClass(response.data);
                return new tweetAction.TweetsRetweetSuccessAction({
                  id: action.payLoad.id,
                  changes: { ...tweet }
                });
              }),
              catchError(error =>
                observableOf(
                  new tweetAction.TweetsRetweetFailureAction({ error })
                )
              )
            );
        })
      );
    })
  );
}

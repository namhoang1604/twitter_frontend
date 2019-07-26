import { Action } from '@ngrx/store';
import { Tweet } from '@src/app/models/tweet';

export enum ActionTypes {
  TWEETS_REQUEST = '[Tweet] Tweets Request',
  TWEETS_FAILURE = '[Tweet] Tweets Failure',
  TWEETS_SUCCESS = '[Tweet] Tweets Success'
}

export class TweetsRequestAction implements Action {
  readonly type = ActionTypes.TWEETS_REQUEST;
}

export class TweetsFailureAction implements Action {
  readonly type = ActionTypes.TWEETS_FAILURE;
  constructor(public payLoad: { error: string }) {}
}

export class TweetsSuccessAction implements Action {
  readonly type = ActionTypes.TWEETS_SUCCESS;
  constructor(public payLoad: { tweets: Tweet[] }) {}
}

export type Actions =
  | TweetsRequestAction
  | TweetsFailureAction
  | TweetsSuccessAction;

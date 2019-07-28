import { Action } from '@ngrx/store';
import { Tweet } from '@src/app/models/tweet';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
  TWEETS_REQUEST = '[Tweet] Tweets Request',
  TWEETS_FAILURE = '[Tweet] Tweets Failure',
  TWEETS_SUCCESS = '[Tweet] Tweets Success',
  CREATE_TWEETS_REQUEST = '[Tweet] Create Tweet Request',
  CREATE_TWEETS_FAILURE = '[Tweet] Create Tweet Failure',
  CREATE_TWEETS_SUCCESS = '[Tweet] Create Tweet Success',
  RETWEET_TWEETS_REQUEST = '[Tweet] Retweet Tweet Request',
  RETWEET_TWEETS_FAILURE = '[Tweet] Retweet Tweet Failure',
  RETWEET_TWEETS_SUCCESS = '[Tweet] Retweet Tweet Success'
}

export class TweetsRequestAction implements Action {
  readonly type = ActionTypes.TWEETS_REQUEST;
  constructor(public payLoad: { page: number; limit: number }) {}
}

export class TweetsFailureAction implements Action {
  readonly type = ActionTypes.TWEETS_FAILURE;
  constructor(public payLoad: { error: string }) {}
}

export class TweetsSuccessAction implements Action {
  readonly type = ActionTypes.TWEETS_SUCCESS;
  constructor(public payLoad: { tweets: Tweet[] }) {}
}

export class TweetsCreateAction implements Action {
  readonly type = ActionTypes.CREATE_TWEETS_REQUEST;
  constructor(public payLoad: { tweet: Tweet }) {}
}

export class TweetsCreateFailureAction implements Action {
  readonly type = ActionTypes.CREATE_TWEETS_FAILURE;
  constructor(public payLoad: { error: string }) {}
}

export class TweetsCreateSuccessAction implements Action {
  readonly type = ActionTypes.CREATE_TWEETS_SUCCESS;
  constructor(public payLoad: { tweet: Tweet }) {}
}

export class TweetsRetweetAction implements Action {
  readonly type = ActionTypes.RETWEET_TWEETS_REQUEST;
  constructor(public payLoad: { id: number }) {}
}

export class TweetsRetweetFailureAction implements Action {
  readonly type = ActionTypes.RETWEET_TWEETS_FAILURE;
  constructor(public payLoad: { error: string }) {}
}

export class TweetsRetweetSuccessAction implements Action {
  readonly type = ActionTypes.RETWEET_TWEETS_SUCCESS;
  constructor(public payLoad: Update<Tweet>) {}
}

export type Actions =
  | TweetsRequestAction
  | TweetsFailureAction
  | TweetsSuccessAction
  | TweetsCreateAction
  | TweetsCreateFailureAction
  | TweetsCreateSuccessAction
  | TweetsRetweetAction
  | TweetsRetweetFailureAction
  | TweetsRetweetSuccessAction;

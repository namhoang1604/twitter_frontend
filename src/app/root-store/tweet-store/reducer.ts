import { Actions, ActionTypes } from './actions';
import { tweetsAdapter, initialTweetState, TweetState } from './state';
import { Update } from '@ngrx/entity';
import { Tweet } from '@src/app/models/tweet';

export function tweetReducer(
  state = initialTweetState,
  action: Actions
): TweetState {
  switch (action.type) {
    case ActionTypes.TWEETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        type: action.type
      };
    }
    case ActionTypes.TWEETS_SUCCESS: {
      return tweetsAdapter.addMany(action.payLoad.tweets, {
        ...state,
        isLoading: false,
        error: null,
        type: action.type
      });
    }
    case ActionTypes.TWEETS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payLoad.error,
        type: action.type
      };
    }
    case ActionTypes.CREATE_TWEETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        type: action.type
      };
    }
    case ActionTypes.CREATE_TWEETS_SUCCESS: {
      return tweetsAdapter.addOne(action.payLoad.tweet, {
        ...state,
        isLoading: true,
        error: null,
        type: action.type
      });
    }
    case ActionTypes.CREATE_TWEETS_FAILURE: {
      return {
        ...state,
        isLoading: true,
        error: action.payLoad.error,
        type: action.type
      };
    }
    case ActionTypes.RETWEET_TWEETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        type: action.type
      };
    }
    case ActionTypes.RETWEET_TWEETS_SUCCESS: {
      return tweetsAdapter.updateOne(action.payLoad, {
        ...state,
        isLoading: true,
        error: null,
        type: action.type
      });
    }
    case ActionTypes.CREATE_TWEETS_FAILURE: {
      return {
        ...state,
        isLoading: true,
        error: action.payLoad.error,
        type: action.type
      };
    }
    case ActionTypes.UPDATE_TWEET_FROM_CHANNEL: {
      const updatedTweet: Update<Tweet> = {
        id: action.payLoad.tweet.id,
        changes: { ...action.payLoad.tweet }
      };
      return tweetsAdapter.updateOne(updatedTweet, {
        ...state,
        isLoading: true,
        error: null,
        type: action.type
      });
    }
    default: {
      return state;
    }
  }
}

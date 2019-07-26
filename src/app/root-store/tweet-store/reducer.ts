import { Actions, ActionTypes } from './actions';
import { tweetsAdapter, initialTweetState, TweetState } from './state';

export function tweetReducer(
  state = initialTweetState,
  action: Actions
): TweetState {
  switch (action.type) {
    case ActionTypes.TWEETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.TWEETS_SUCCESS: {
      return tweetsAdapter.addAll(action.payLoad.tweets, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.TWEETS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payLoad.error
      };
    }
    default: {
      return state;
    }
  }
}

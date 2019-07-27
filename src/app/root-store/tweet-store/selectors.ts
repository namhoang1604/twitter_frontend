import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { TweetState, tweetsAdapter } from './state';
import { Tweet } from '@src/app/models/tweet';
import { ActionTypes } from './actions';

export const getError = (state: TweetState): any => state.error;

export const getIsLoading = (state: TweetState): boolean => state.isLoading;

// Tweet
export const selectTweetState: MemoizedSelector<
  object,
  TweetState
> = createFeatureSelector<TweetState>('tweet');

export const selectAllTweets: (
  state: object
) => Tweet[] = tweetsAdapter.getSelectors(selectTweetState).selectAll;

export const selectTweetById = (id: number) =>
  createSelector(
    this.selectAllTweets,
    (allTweets: Tweet[]) => {
      if (allTweets) {
        return allTweets.find(p => p.id === id);
      } else {
        return null;
      }
    }
  );

export const selectTweetError: MemoizedSelector<object, any> = createSelector(
  selectTweetState,
  getError
);

export const selectTweetIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTweetState,
  getIsLoading
);

export const selectType: MemoizedSelector<object, ActionTypes> = createSelector(
  selectTweetState,
  (state: TweetState) => state.type
);

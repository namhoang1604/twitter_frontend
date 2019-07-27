import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tweet } from '@src/app/models/tweet';
import { ActionTypes } from './actions';

export const tweetsAdapter: EntityAdapter<Tweet> = createEntityAdapter<Tweet>({
  selectId: model => model.id,
  sortComparer: (a: Tweet, b: Tweet): number =>
    b.retweets.length - a.retweets.length
});

export interface TweetState extends EntityState<Tweet> {
  isLoading?: boolean;
  error?: any;
  type?: ActionTypes;
}

export const initialTweetState: TweetState = tweetsAdapter.getInitialState({
  isLoading: false,
  error: null,
  type: null
});

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tweet } from '@src/app/models/tweet';

export const tweetsAdapter: EntityAdapter<Tweet> = createEntityAdapter<Tweet>({
  selectId: model => model.id,
  sortComparer: (a: Tweet, b: Tweet): number => b.retweets - a.retweets
});

export interface TweetState extends EntityState<Tweet> {
  isLoading?: boolean;
  error?: any;
}

export const initialTweetState: TweetState = tweetsAdapter.getInitialState({
  isLoading: false,
  error: null
});

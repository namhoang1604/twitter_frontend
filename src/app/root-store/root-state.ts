import { TweetStoreState } from './tweet-store';
import { UserStoreState } from './user-store';

export interface RootState {
  Tweet: TweetStoreState.TweetState;
  User: UserStoreState.UserState;
}

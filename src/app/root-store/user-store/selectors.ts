import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { UserState } from './state';

// User
export const selectUserState: MemoizedSelector<
  object,
  UserState
> = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state
);

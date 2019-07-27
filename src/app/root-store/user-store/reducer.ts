import { Actions, ActionTypes } from './actions';
import { initialUserState, UserState } from './state';

export function userReducer(
  state = initialUserState,
  action: Actions
): UserState {
  switch (action.type) {
    case ActionTypes.GENERATE_USER: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}

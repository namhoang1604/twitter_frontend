import { Action } from '@ngrx/store';

export enum ActionTypes {
  GENERATE_USER = '[User] Generate User Local'
}

export class GenerateUserAction implements Action {
  readonly type = ActionTypes.GENERATE_USER;
}

export type Actions = GenerateUserAction;

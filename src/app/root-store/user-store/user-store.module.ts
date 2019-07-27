import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userReducer } from './reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('user', userReducer)],
  providers: []
})
export class UserStoreModule {}

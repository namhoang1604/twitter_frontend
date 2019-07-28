import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tweetReducer } from './reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TweetStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('tweet', tweetReducer),
    EffectsModule.forFeature([TweetStoreEffects])
  ],
  providers: [TweetStoreEffects]
})
export class TweetStoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from '@share/modules/share.module';
import { TweetDetailComponent } from '@src/app/components/tweet-detail/tweet-detail.component';

@NgModule({
  declarations: [HomeComponent, TweetDetailComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule]
})
export class HomeModule {}

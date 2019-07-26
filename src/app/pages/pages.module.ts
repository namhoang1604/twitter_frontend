import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ShareModule } from '@share/modules/share.module';
import { TweetFormComponent } from '../components/tweet-form/tweet-form.component';

@NgModule({
  declarations: [PagesComponent, TweetFormComponent],
  imports: [CommonModule, PagesRoutingModule, ShareModule],
  entryComponents: [TweetFormComponent]
})
export class PagesModule {}

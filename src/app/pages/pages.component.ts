import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TweetFormComponent } from '../components/tweet-form/tweet-form.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialogToCreateTweet(): void {
    const dialogRef = this.dialog.open(TweetFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

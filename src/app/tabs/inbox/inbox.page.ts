import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Messages } from 'src/app/models/messages';
import { MessagesService } from 'src/app/services/messages.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {


  user_id = this.session.user.id;

  public messages: Messages[] = [];
  constructor(private messagesService: MessagesService, private session: SessionService, private router: Router) {
    this.messagesService.retrieveMessagesFromHttp(this.user_id);
    this.messagesService.messages.subscribe(
      (omessages: Messages[]) => {
        this.messages = omessages;
      }
      );
   }

   
  ngOnInit() {
  }

}

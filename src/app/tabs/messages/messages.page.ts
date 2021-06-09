import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Messages } from 'src/app/models/messages';
import { Tomessages } from 'src/app/models/tomessages';
import { MessagesService } from 'src/app/services/messages.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public from: string = this.session.user.user;
  public to: number = 0;
  public asunto: string = "";
  public correo: string = "";
  public mensaje: string = "";
  public data: string = "";

  user_id = this.session.user.id;

  public ToMessages: Tomessages[] = [];
  public messages: Messages[] = [];


  constructor(private messagesService: MessagesService, public session: SessionService, private router: Router) {


    if (this.session.user.group == 2) {
      this.messagesService.retrieveToMessgaesAdminFromHttp();
      this.messagesService.ToMessages.subscribe(
        (otomessages: Tomessages[]) => {
          this.ToMessages = otomessages;
        }
      );
    }
    if (this.session.user.group == 3 || this.session.user.group == 4 || this.session.user.group == 1 ) {
      this.messagesService.retrieveToMessgaesFromHttp();
      this.messagesService.ToMessages.subscribe(
        (otomessages: Tomessages[]) => {
          this.ToMessages = otomessages;
        }
      );
    }
  }

  ngOnInit() {
  }

  sendMessage() {
    if (this.session.user.token == '') {
      this.router.navigate(['/tabs/messages'])
    }
    else {
      let mensaje: Messages = new Messages();
      mensaje.from = this.from;
      mensaje.to = this.to;
      mensaje.asunto = this.asunto;
      mensaje.mensaje = this.mensaje;
      mensaje.data = this.data;

      this.messagesService.sendMessage(mensaje);
    }
  }
}

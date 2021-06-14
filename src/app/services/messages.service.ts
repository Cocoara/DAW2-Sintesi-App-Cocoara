import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Consulta } from '../models/consulta';
import { Messages } from '../models/messages';
import { Temas } from '../models/temas';
import { Tomessages } from '../models/tomessages';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _messages: BehaviorSubject<Messages[]> = new BehaviorSubject([]);
  private _tomessages: BehaviorSubject<Tomessages[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private sessionService :SessionService) { }

  get messages(): Observable<Messages[]> {
    return this._messages.asObservable();
  }

  get ToMessages(): Observable<Tomessages[]> {
    return this._tomessages.asObservable();
  }

  retrieveMessagesFromHttp(user_id) {
    let size = 0;
    this.messages.pipe(take(1)).subscribe(
      (omessages: Messages[]) => {
        size = omessages.length;
      }
    );


    let options = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };

    this.http.get("http://localhost/BitBit/private/getmessages/"+user_id, options).subscribe(
      (response: any) => {
        this.sessionService.updateToken(response.body.token);
        if (response.body.mymessages.length == size) return;
        else this._messages.next([]);
        response.body.mymessages.forEach((element) => {
          let messages: Messages = new Messages();
          messages.id = element.id;
          messages.from = element.from;
          messages.to = element.to;
          messages.asunto = element.asunto;
          messages.mensaje = element.mensaje;
          messages.data = element.data;

          this.messages.pipe(take(1)).subscribe(
            (omessages: Messages[]) => {
              this._messages.next(omessages.concat(messages));
            }
          )
        });
      }
    );
  }


  retrieveToMessgaesAdminFromHttp() {
    let size = 0;
    this.ToMessages.pipe(take(1)).subscribe(
      (otomessages: Tomessages[]) => {
        size = otomessages.length;
      }
    );


    let options = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };

    this.http.get("http://localhost/BitBit/private/tomessages", options).subscribe(
      (response: any) => {
        this.sessionService.updateToken(response.body.token);
        if (response.body.tomessages.length == size) return;
        else this._tomessages.next([]);
        response.body.tomessages.forEach((element) => {
          let ToMessages: Tomessages = new Tomessages();
          ToMessages.id = element.id;
          ToMessages.username = element.username;

          this.ToMessages.pipe(take(1)).subscribe(
            (otomessages: Tomessages[]) => {
              this._tomessages.next(otomessages.concat(ToMessages));
            }
          )
        });
      }
    );
  }





  
  retrieveToMessgaesFromHttp() {
    let size = 0;
    this.ToMessages.pipe(take(1)).subscribe(
      (otomessages: Tomessages[]) => {
        size = otomessages.length;
      }
    );


    let options = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };

    this.http.get("http://localhost/BitBit/private/tomessagesAll", options).subscribe(
      (response: any) => {
        console.log(response);
        this.sessionService.updateToken(response.body.token);
        if (response.body.tomessages.length == size) return;
        else this._tomessages.next([]);
        response.body.tomessages.forEach((element) => {
          let ToMessages: Tomessages = new Tomessages();
          ToMessages.id = element.id;
          ToMessages.username = element.username;

          this.ToMessages.pipe(take(1)).subscribe(
            (otomessages: Tomessages[]) => {
              this._tomessages.next(otomessages.concat(ToMessages));
            }
          )
        });
      }
    );
  }
 

  sendMessage(messages: Messages){
    let messagesData = {
      from :  messages.from,
      to : messages.to,
      asunto : messages.asunto,
      mensaje : messages.mensaje,
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      })
    };

    this.http.post("http://localhost/BitBit/private/messages", messagesData, options).subscribe( 
      (response:any) => {
        this.sessionService.updateToken(response.token);
        console.log("Mensaje enviado correctamente");
      },
      (error:any) => {
        alert("Error: " + error.message);
      }
    )
  };
}
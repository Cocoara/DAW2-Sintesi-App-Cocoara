import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Opciones } from '../models/opciones';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {

  constructor(private http: HttpClient, private sessionService :SessionService) { }

  private _opciones: BehaviorSubject<Opciones> = new BehaviorSubject(new Opciones);

  get opciones(): Observable<Opciones> {
    return this._opciones.asObservable();
  }

  retrieveOpcionesFromHttp(user_id) {
    
    let options = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };

    this.http.get("http://localhost/BitBit/private/opciones/"+user_id, options).subscribe(
      (response: any) => {
        this.sessionService.updateToken(response.body.token);
        if (response.body.info == false) return;

        response.body.info.forEach((element) => {
          let opciones: Opciones = new Opciones();
          opciones.id = element.id;
          opciones.username = element.username;
          opciones.lastname = element.last_name;
          opciones.password = element.password;
          opciones.email = element.email;
          opciones.phone = element.phone;
          
          this.opciones.pipe(take(1)).subscribe(
            (oopciones: Opciones) => {
              this._opciones.next(opciones);
            }
          )
        });
      }
    );
  }

  updateOptions(opciones: Opciones){
    let consultaData = {
      id: opciones.id,
      username : opciones.username,
      lastname : opciones.lastname,
      phone : opciones.phone,
      email : opciones.email,
      password : opciones.password,
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      })
    };
    this.http.post("http://localhost/BitBit/private/updateOpciones", consultaData, options).subscribe( 
      (response:any) => {
        this.sessionService.updateToken(response.token);
        console.log("Consulta enviada correctamente");
      },
      (error:any) => {
        alert("Error: " + error.message);
      }
    )
  };


  updateOptionsWithout(opciones: Opciones){
    let consultaData = {
      id: opciones.id,
      username : opciones.username,
      lastname : opciones.lastname,
      phone : opciones.phone,
      email : opciones.email,
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      })
    };
    this.http.post("http://localhost/BitBit/private/updateOpcionesWithout", consultaData, options).subscribe( 
      (response:any) => {
        this.sessionService.updateToken(response.token);
        console.log("Consulta enviada correctamente");
      },
      (error:any) => {
        alert("Error: " + error.message);
      }
    )
  };

}

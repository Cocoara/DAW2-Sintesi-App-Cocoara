import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Incidencias } from '../models/incidencias';
import { Noticias } from '../models/noticias';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private _noticias: BehaviorSubject<Noticias[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  get noticias(): Observable<Noticias[]> {
    return this._noticias.asObservable();
  }


  retrieveNoticiasFromHttp(group_id) {
    let size = 0;
    this.noticias.pipe(take(1)).subscribe(
      (onoticias: Noticias[]) => {
        size = onoticias.length;
      }
    );

    if (this.sessionService.user.token != '') {

      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.sessionService.user.token
        }),
        observe: 'response' as 'response'
      };

      this.http.get("http://localhost/BitBit/private/noticiasByGroup/" + group_id, options).subscribe(
        (response: any) => {
          this.sessionService.updateToken(response.body.token);
          console.log(response);
          if (response.body.noticias.length == size) return;
          else this._noticias.next([]);
          response.body.noticias.forEach((element) => {
            let noticias: Noticias = new Noticias();
            noticias.id = element.id;
            noticias.titulo = element.titulo;
            noticias.contenido = element.contenido;
            noticias.id_grupo = element.id_grupo;
            noticias.data = element.data;
            noticias.file_url = element.file_url;

            this.noticias.pipe(take(1)).subscribe(
              (onoticias: Noticias[]) => {
                this._noticias.next(onoticias.concat(noticias));
              }
            )
          });
        }
      );

    }
  }
}

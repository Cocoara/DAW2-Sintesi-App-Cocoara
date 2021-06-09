import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Noticias } from '../models/noticias';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _noticias: BehaviorSubject<Noticias[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  get noticias(): Observable<Noticias[]> {
    return this._noticias.asObservable();
  }

  retrieveNoticiasFromHttp() {
    let size = 0;
    this.noticias.pipe(take(1)).subscribe(
      (onoticias: Noticias[]) => {
        size = onoticias.length;
      }
    );

    this.http.get("http://localhost/BitBit/public/noticias").subscribe(
      (response: any) => {
        if (response.length == size) return;
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
            (oNoticias: Noticias[]) => {
              this._noticias.next(oNoticias.concat(noticias));
            }
          )
        });
      }
    );



  }
}



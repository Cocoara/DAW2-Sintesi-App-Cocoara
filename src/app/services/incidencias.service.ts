import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Incidencias } from '../models/incidencias';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private _incidencias: BehaviorSubject<Incidencias[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  get incidencias(): Observable<Incidencias[]> {
    return this._incidencias.asObservable();
  }

  retrieveIncidenciasFromHttp(user_id) {

    let size = 0;
    this.incidencias.pipe(take(1)).subscribe(
      (oincidencias: Incidencias[]) => {
        size = oincidencias.length;
      }
    );

// console.log(this.sessionService.user.token);

    let options = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };

// console.log(this.sessionService.user.token);

    this.http.get("http://localhost/BitBit/private/incidencias/"+user_id, options).subscribe(
      (response: any) => {
        console.log(response);
        this.sessionService.updateToken(response.body.token);
        if (response.body.incidencias.length == size) return;
        else this._incidencias.next([]);
        response.body.incidencias.forEach((element) => {
          let incidencias: Incidencias = new Incidencias();
          incidencias.id_incidencia = element.id_incidencia;
          incidencias.id_user = element.id_user;
          incidencias.id_Estado = element.id_Estado;
          incidencias.desc_averia = element.desc_averia;
          incidencias.Fecha_entrada = element.Fecha_entrada;
          incidencias.uuid = element.uuid;
          incidencias.Marca = element.Marca;
          incidencias.Modelo = element.Modelo;
          incidencias.Numerio_serio = element.Numerio_serio;
          incidencias.Diagnostico_prev = element.Diagnostico_prev;
          incidencias.tiempo_reparacion = element.tiempo_reparacion;
          incidencias.id_tecnico = element.id_tecnico;
          incidencias.descripcion_gestor = element.descripcion_gestor;
          incidencias.canvasImage = element.canvasImage;
          incidencias.rutaFicheros = element.rutaFicheros;
          incidencias.material = element.material;

          this.incidencias.pipe(take(1)).subscribe(
            (oincidencias: Incidencias[]) => {
              this._incidencias.next(oincidencias.concat(incidencias));
            }
          )
        });
      }
    );

  }
}

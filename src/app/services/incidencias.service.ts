import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Estado } from '../models/estado';
import { Incidencias } from '../models/incidencias';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private _incidencias: BehaviorSubject<Incidencias[]> = new BehaviorSubject([]);
  private _estados: BehaviorSubject<Estado[]> = new BehaviorSubject([]);
  private _incidencia: BehaviorSubject<Incidencias> = new BehaviorSubject(new Incidencias);

  constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) { }
  get estados(): Observable<Estado[]> {
    return this._estados.asObservable();
  }

  get incidencias(): Observable<Incidencias[]> {
    return this._incidencias.asObservable();
  }

  get incidencia(): Observable<Incidencias> {
    return this._incidencia.asObservable();
  }

  retrieveIncidenciasFromHttp(user_id) {

    let size = 0;
    this.incidencias.pipe(take(1)).subscribe(
      (oincidencias: Incidencias[]) => {
        size = oincidencias.length;
      }
    );

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };


    if (this.sessionService.user.group == 3) {
      this.http.get("http://localhost/BitBit/private/incidenciasTecnico/" + user_id, options).subscribe(
        (response: any) => {
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
    else {
      this.http.get("http://localhost/BitBit/private/incidencias/" + user_id, options).subscribe(
        (response: any) => {
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


  retrieveIncidenciaFromHttp(id_incidencia) {

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };

    this.http.get("http://localhost/BitBit/private/incidenciaById/" + id_incidencia, options).subscribe(
      (response: any) => {
        this.sessionService.updateToken(response.body.token);
        if (response.body.incidencia == false) return;
        response.body.incidencia.forEach((element) => {
          let incidencia: Incidencias = new Incidencias();
            incidencia.id_incidencia = element.id_incidencia;
            incidencia.id_user = element.id_user;
            incidencia.id_Estado = element.id_Estado;
            incidencia.desc_averia = element.desc_averia;
            incidencia.Fecha_entrada = element.Fecha_entrada;
            incidencia.uuid = element.uuid;
            incidencia.Marca = element.Marca;
            incidencia.Modelo = element.Modelo;
            incidencia.Numerio_serio = element.Numerio_serio;
            incidencia.Diagnostico_prev = element.Diagnostico_prev;
            incidencia.tiempo_reparacion = element.tiempo_reparacion;
            incidencia.id_tecnico = element.id_tecnico;
            incidencia.descripcion_gestor = element.descripcion_gestor;
            incidencia.canvasImage = element.canvasImage;
            incidencia.rutaFicheros = element.rutaFicheros;
            incidencia.material = element.material;
          

          this.incidencia.pipe(take(1)).subscribe(
            (oincidencia: Incidencias) => {
              this._incidencia.next(incidencia);
            }
          )
        });
      }
    );
  }

  retrieveEstadosFromHttp() {
    let size = 0;
    this.estados.pipe(take(1)).subscribe(
      (oEstados: Estado[]) => {
        size = oEstados.length;
      }
    );

    this.http.get("http://localhost/BitBit/private/estadosIncidencia").subscribe(
      (response: any) => {
        if (response.length == size) return;
        else this._estados.next([]);
        response.forEach((element) => {
          let estado: Estado = new Estado();
          estado.id_Estado = element.id_Estado;
          estado.Descrip = element.Descrip;

          this.estados.pipe(take(1)).subscribe(
            (oEstados: Estado[]) => {
              this._estados.next(oEstados.concat(estado));
            }
          )
        });
      }
    );
  }


  updateIncidencia(incidencia: Incidencias) {
    let updateData = {
      id_incidencia: incidencia.id_incidencia,
      id_Estado: incidencia.id_Estado,
      Fecha_entrada: incidencia.Fecha_entrada,
      desc_averia: incidencia.desc_averia,
      uuid: incidencia.uuid,
      Marca: incidencia.Marca,
      Modelo: incidencia.Modelo,
      Numerio_serio: incidencia.Numerio_serio,
      Diagnostico_prev: incidencia.Diagnostico_prev,
      tiempo_reparacion: incidencia.tiempo_reparacion,
      descripcion_gestor: incidencia.descripcion_gestor,
      material: incidencia.material,
      canvasImage: incidencia.canvasImage
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.user.token
      }),
      observe: 'response' as 'response'
    };
    
    this.http.post("http://localhost/BitBit/private/updateIncidencia/"+incidencia.id_incidencia, updateData, options).subscribe(
      (response: any) => {
        this.sessionService.updateToken(response.body.token);
      },
      (error: any) => {
        alert("Error: " + error.message);
      }
    )
  };


}
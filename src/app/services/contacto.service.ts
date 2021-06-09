import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Consulta } from '../models/consulta';
import { HomeInfo } from '../models/homeInfo';
import { Temas } from '../models/temas';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private _temas: BehaviorSubject<Temas[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get temas(): Observable<Temas[]> {
    return this._temas.asObservable();
  }

  retrieveTemasFromHttp() {
    let size = 0;
    this.temas.pipe(take(1)).subscribe(
      (otemas: Temas[]) => {
        size = otemas.length;
      }
    );


    this.http.get("http://localhost/BitBit/public/temasConsulta").subscribe(
      (response: any[]) => {
        if (response.length == size) return;
        else this._temas.next([]);
        response.forEach((element) => {
          let temas: Temas = new Temas();
          temas.id = element.id;
          temas.tipoConsulta = element.tipoConsulta;

          this.temas.pipe(take(1)).subscribe(
            (otemas: Temas[]) => {
              this._temas.next(otemas.concat(temas));
            }
          )
        });
      }
    );
  }

  addConsulta(consulta: Consulta){
    let consultaData = {
      nombre : consulta.nombre,
      apellido : consulta.apellido,
      telefono : consulta.telefono,
      correo : consulta.correo,
      tema : consulta.tema,
      mensaje : consulta.mensaje,
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("http://localhost/BitBit/public/consulta", consultaData, options).subscribe( 
      (response:any) => {
        console.log("Consulta enviada correctamente");
      },
      (error:any) => {
        alert("Error: " + error.message);
      }
    )
  };
}
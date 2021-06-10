import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estado } from 'src/app/models/estado';
import { Incidencias } from 'src/app/models/incidencias';
import { IncidenciasService } from 'src/app/services/incidencias.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-incidencies-detail',
  templateUrl: './incidencies-detail.page.html',
  styleUrls: ['./incidencies-detail.page.scss'],
})
export class IncidenciesDetailPage implements OnInit {

  public id_incidencia: number;
  public id_user: number;
  public id_Estado: number;
  public desc_averia: string;
  public Fecha_entrada: string;
  public uuid: string;
  public Marca: string;
  public Modelo: string;
  public Numerio_serio: string;
  public Diagnostico_prev: string;
  public Telf: string;
  public tiempo_reparacion: string;
  public id_tecnico: number;
  public descripcion_gestor: string;
  public canvasImage: string;
  public rutaFicheros: string;
  public material: string;

  public estados: Estado[] = [];

  constructor(private activatedRoute: ActivatedRoute, private incidenciasService: IncidenciasService, private session: SessionService, private router: Router) {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id_incidencia']) {
          this.id_incidencia = params['id_incidencia'];
          this.incidenciasService.retrieveIncidenciaFromHttp(this.id_incidencia);
          this.incidenciasService.incidencia.subscribe(
            (oincidencia: Incidencias) => {
              this.id_incidencia = oincidencia.id_incidencia;
              this.id_user = oincidencia.id_user;
              this.id_Estado = oincidencia.id_Estado;
              this.desc_averia = oincidencia.desc_averia;
              this.Fecha_entrada = oincidencia.Fecha_entrada;
              this.uuid = oincidencia.uuid;
              this.Marca = oincidencia.Marca;
              this.Modelo = oincidencia.Modelo;
              this.Numerio_serio = oincidencia.Numerio_serio;
              this.Diagnostico_prev = oincidencia.Diagnostico_prev;
              this.tiempo_reparacion = oincidencia.tiempo_reparacion;
              this.id_tecnico = oincidencia.id_tecnico;
              this.descripcion_gestor = oincidencia.descripcion_gestor;
              this.canvasImage = oincidencia.canvasImage;
              this.rutaFicheros = oincidencia.rutaFicheros;
              this.material = oincidencia.material;
            }
          );


          this.incidenciasService.retrieveEstadosFromHttp();
          this.incidenciasService.estados.subscribe(
              (oestados: Estado[]) => {
                this.estados = oestados;
              }
          );
        }
      }
    );
  }

  ngOnInit() {
  }

  // updateOptions() {
  //   if (this.session.user.token == '') {
  //     this.router.navigate(['/inicio'])
  //   }

  //   let opciones: Opciones = new Opciones();
  //   if (this.password != '') {
  //     opciones.id = this.session.user.id;
  //     opciones.username = this.username;
  //     opciones.lastname = this.lastname;
  //     opciones.email = this.email;
  //     opciones.phone = this.phone;
  //     opciones.password = this.password;

  //     this.opcionesService.updateOptions(opciones);
  //   }

  // public incidencia: Incidencias[] = [];
  // private id_incidencia: string = "";

  // constructor(private activatedRoute: ActivatedRoute, private incidenciasService: IncidenciasService, public session: SessionService) {

  //   this.activatedRoute.params.subscribe(
  //     (params: Params) => {
  //       if (params['id_incidencia']) {
  //         if(this.session.user.group == 3){
  //           this.incidenciasService.retrieveIncidenciaFromHttp(this.id_incidencia);
  //           this.incidenciasService.incidencias.subscribe(
  //             (oincidencias: Incidencias[]) => {
  //               this.incidencia = oincidencias;
  //             }
  //           );
  //         }
  //       }
  //       else {
  //         console.log('no')
  //       }
  //     }
  //   );
  // }



  // }  
}



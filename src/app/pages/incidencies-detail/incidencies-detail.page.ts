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
  public selectedid_Estado: number;

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

              this.selectedid_Estado = oincidencia.id_Estado;

            }
          );


          this.incidenciasService.retrieveEstadosFromHttp();
          this.incidenciasService.estados.subscribe(
            (oestados: Estado[]) => {
              this.estados = oestados;
            }
          );
          this.id_incidencia = params['id_incidencia'];
        }
      }
    );
  }

  ngOnInit() {
  }

  updateIncidencia() {
    if (this.session.user.token == '') {
      this.router.navigate(['/inicio'])
    }

    let incidencia: Incidencias = new Incidencias();

    incidencia.id_incidencia = this.id_incidencia;
    incidencia.id_Estado = this.id_Estado;
    incidencia.Fecha_entrada = this.Fecha_entrada;
    incidencia.desc_averia = this.desc_averia;
    incidencia.uuid = this.uuid;
    incidencia.Marca = this.Marca;
    incidencia.Modelo = this.Modelo;
    incidencia.Numerio_serio = this.Numerio_serio;
    incidencia.Diagnostico_prev = this.Diagnostico_prev;
    incidencia.tiempo_reparacion = this.tiempo_reparacion;
    incidencia.descripcion_gestor = this.descripcion_gestor;
    incidencia.material = this.material;
    incidencia.canvasImage = this.canvasImage;

    console.log(incidencia.id_Estado)

    this.incidenciasService.updateIncidencia(incidencia);
  }


}

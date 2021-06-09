import { Component, OnInit } from '@angular/core';
import { HomeInfo } from 'src/app/models/homeInfo';
import { Incidencias } from 'src/app/models/incidencias';
import { HomeInfoService } from 'src/app/services/homeInfo.service';
import { IncidenciasService } from 'src/app/services/incidencias.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})

export class IncidenciasPage implements OnInit {

  public incidencias: Incidencias[] = [];
  user_id = this.session.user.id;
  constructor(private incidenciasService: IncidenciasService, private session: SessionService) {
    this.incidenciasService.retrieveIncidenciasFromHttp(this.user_id);
    this.incidenciasService.incidencias.subscribe(
      (oincidencias: Incidencias[]) => {
        this.incidencias = oincidencias;
      }
    );

  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { Opciones } from 'src/app/models/opciones';
import { OpcionesService } from 'src/app/services/opciones.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  public username: string = "";
  public lastname: string = "";
  public password: string = "";
  public email: string = "";
  public phone: number = 0;

  user_id = this.session.user.id;

  constructor(private opcionesService: OpcionesService, private session: SessionService, private router: Router) {
    this.opcionesService.retrieveOpcionesFromHttp(this.user_id);

    this.opcionesService.opciones.subscribe(
      (oopciones: Opciones) => {
        this.username = oopciones.username;
        this.lastname = oopciones.lastname;
        this.email = oopciones.email;
        this.phone = oopciones.phone;

      }
    );
  }

  ngOnInit() {
  }

  updateOptions() {
    if (this.session.user.token == '') {
      this.router.navigate(['/inicio'])
    }

    let opciones: Opciones = new Opciones();
    if (this.password != '') {
      opciones.id = this.session.user.id;
      opciones.username = this.username;
      opciones.lastname = this.lastname;
      opciones.email = this.email;
      opciones.phone = this.phone;
      opciones.password = this.password;

      this.opcionesService.updateOptions(opciones);
    }
    else {
      opciones.id = this.session.user.id;
      opciones.username = this.username;
      opciones.lastname = this.lastname;
      opciones.email = this.email;
      opciones.phone = this.phone;

      this.opcionesService.updateOptionsWithout(opciones);
    }


  }
}

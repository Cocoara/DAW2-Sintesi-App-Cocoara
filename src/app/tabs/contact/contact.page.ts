import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { Temas } from 'src/app/models/temas';
import { ContactoService } from 'src/app/services/contacto.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public nombre: string ="";
  public apellido: string ="";
  public telefono: number =0;
  public correo: string ="";
  public tema: number =0;
  public mensaje: string ="";

  public temas: Temas[] = [];
  constructor(private contactoService: ContactoService, private session: SessionService, private router: Router) {
    this.contactoService.retrieveTemasFromHttp();
    this.contactoService.temas.subscribe(
      (otemas: Temas[]) => {
        this.temas = otemas;
      }
    );
  }

  ngOnInit() {
  }

  newConsulta(){
    let consulta : Consulta = new Consulta();
    consulta.nombre = this.nombre;
    consulta.apellido = this.apellido;
    consulta.telefono = this.telefono;
    consulta.correo = this.correo;
    consulta.tema = this.tema;
    consulta.mensaje = this.mensaje;

    this.contactoService.addConsulta(consulta);
  }
}

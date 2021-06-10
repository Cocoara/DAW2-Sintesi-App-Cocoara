import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-incidencies-detail',
  templateUrl: './incidencies-detail.page.html',
  styleUrls: ['./incidencies-detail.page.scss'],
})
export class IncidenciesDetailPage implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(
      (params: Params) =>{
          if(params['id_incidencia']){
            console.log('si')
          }
          else{
            console.log('no')
          }
      }
    );
  }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidenciesDetailPageRoutingModule } from './incidencies-detail-routing.module';

import { IncidenciesDetailPage } from './incidencies-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidenciesDetailPageRoutingModule
  ],
  declarations: [IncidenciesDetailPage]
})
export class IncidenciesDetailPageModule {}

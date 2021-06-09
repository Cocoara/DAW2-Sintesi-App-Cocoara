import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiensomosPageRoutingModule } from './quiensomos-routing.module';

import { QuiensomosPage } from './quiensomos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiensomosPageRoutingModule
  ],
  declarations: [QuiensomosPage]
})
export class QuiensomosPageModule {}

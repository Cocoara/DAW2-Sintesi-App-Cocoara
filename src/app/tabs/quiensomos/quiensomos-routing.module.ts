import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuiensomosPage } from './quiensomos.page';

const routes: Routes = [
  {
    path: '',
    component: QuiensomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuiensomosPageRoutingModule {}

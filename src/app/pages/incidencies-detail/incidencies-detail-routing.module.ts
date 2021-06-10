import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidenciesDetailPage } from './incidencies-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IncidenciesDetailPage
  },
  {
    path: ':id_incidencia',
    component: IncidenciesDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidenciesDetailPageRoutingModule {}

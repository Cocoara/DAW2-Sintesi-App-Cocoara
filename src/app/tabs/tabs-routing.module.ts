import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'quiensomos',
        loadChildren: () => import('./quiensomos/quiensomos.module').then( m => m.QuiensomosPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'incidencias',
        loadChildren: () => import('./incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
      },
      {
        path: 'opciones',
        loadChildren: () => import('./opciones/opciones.module').then( m => m.OpcionesPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

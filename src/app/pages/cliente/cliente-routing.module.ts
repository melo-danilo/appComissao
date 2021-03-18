import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';

import { ClienteComponent } from './cliente.component';
import { ContatoComponent } from './contato/contato.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClienteComponent,
    children: [
      {
        path: 'adicionar',
        component: AdicionarComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'contato',
        component: ContatoComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

export const routedComponents = [
  AdicionarComponent,
  ListarComponent,
];

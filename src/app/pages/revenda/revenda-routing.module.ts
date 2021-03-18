import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ContatoComponent } from './contato/contato.component';
import { ListarComponent } from './listar/listar.component';

import { RevendaComponent } from './revenda.component';

const routes: Routes = [
  { 
    path: '', 
    component: RevendaComponent,
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'adicionar',
        component: AdicionarComponent
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
export class RevendaRoutingModule { }

export const routedComponents = [
  ListarComponent,
  AdicionarComponent,
  ContatoComponent
];

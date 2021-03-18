import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ListarComponent } from './listar/listar.component';

import { VendaComponent } from './venda.component';

const routes: Routes = [
  { 
    path: '', 
    component: VendaComponent,
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'adicionar',
        component: AdicionarComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule { }

export const routedComponents = [
  ListarComponent,
  AdicionarComponent,
];

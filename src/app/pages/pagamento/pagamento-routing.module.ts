import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';

import { PagamentoComponent } from './pagamento.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagamentoComponent,
    children: [
      {
        path: 'registrar',
        component: RegistrarComponent
      },
      {
        path: 'consultar',
        component: ConsultarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }

export const routedComponents = [
  RegistrarComponent,
  ConsultarComponent,
];

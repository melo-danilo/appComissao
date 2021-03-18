import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComissaoComponent } from './comissao.component';
import { HistoricoComponent } from './historico/historico.component';
import { LancamentoComponent } from './lancamento/lancamento.component';

const routes: Routes = [
  { 
    path: '', 
    component: ComissaoComponent,
    children: [
      {
        path: 'historico',
        component: HistoricoComponent
      },
      {
        path: 'lancamento',
        component: LancamentoComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComissaoRoutingModule { }

export const routedComponents = [
  HistoricoComponent,
  LancamentoComponent,
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComissaoRoutingModule, routedComponents } from './comissao-routing.module';
import { ComissaoComponent } from './comissao.component';
import { HistoricoComponent } from './historico/historico.component';
import { LancamentoComponent } from './lancamento/lancamento.component';

import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    ComissaoComponent, 
    HistoricoComponent, 
    LancamentoComponent, 
    routedComponents,
    
    
  ],
  imports: [
    CommonModule,
    ComissaoRoutingModule,
    NbCardModule,
    NbIconModule, 
    NbInputModule,
    Ng2SmartTableModule,
  ]
})
export class ComissaoModule { }

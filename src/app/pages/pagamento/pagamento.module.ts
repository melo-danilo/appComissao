import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule, routedComponents } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConsultarComponent } from './consultar/consultar.component';


@NgModule({
  declarations: [
    PagamentoComponent, 
    RegistrarComponent, 
    ConsultarComponent,
    routedComponents
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule
  ]
})
export class PagamentoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule, routedComponents, } from './venda-routing.module';
import { VendaComponent } from './venda.component';
import { ListarComponent } from './listar/listar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [VendaComponent, ListarComponent, AdicionarComponent, routedComponents,],
  imports: [
    CommonModule,
    VendaRoutingModule,
    NbCardModule,
    NbIconModule, 
    NbInputModule,
    Ng2SmartTableModule,
  ]
})
export class VendaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevendaRoutingModule, routedComponents } from './revenda-routing.module';
import { RevendaComponent } from './revenda.component';
import { ListarComponent } from './listar/listar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    RevendaComponent, 
    ListarComponent, 
    AdicionarComponent, 
    routedComponents, 
    ContatoComponent,
    
  ],
  imports: [
    CommonModule,
    RevendaRoutingModule,
    NbCardModule,
    NbIconModule, 
    NbInputModule,
    Ng2SmartTableModule,
  ]
})
export class RevendaModule { }

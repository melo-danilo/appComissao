import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ListarComponent } from './listar/listar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

import { NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbLayoutModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    ClienteComponent, 
    ListarComponent, 
    AdicionarComponent, 
    routedComponents, 
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NbCardModule,
    NbIconModule, 
    NbInputModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbLayoutModule,
  ]
})
export class ClienteModule { }

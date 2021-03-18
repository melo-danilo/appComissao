import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ClienteModule } from './cliente/cliente.module';
import { ComissaoModule } from './comissao/comissao.module';
import { RevendaModule } from './revenda/revenda.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { VendaModule } from './venda/venda.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    ClienteModule,
    ComissaoModule,
    RevendaModule,
    PagamentoModule,
    VendaModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    { 
      path: 'cliente', 
      loadChildren: () => import('../pages/cliente/cliente.module')
      .then(m => m.ClienteModule)
    },
    { 
      path: 'revenda', 
      loadChildren: () => import('../pages/revenda/revenda.module')
      .then(m => m.RevendaModule) 
    },
    { 
      path: 'venda', 
      loadChildren: () => import('../pages/venda/venda.module')
      .then(m => m.VendaModule) 
    },
    { 
      path: 'pagamento', 
      loadChildren: () => import('../pages/pagamento/pagamento.module')
      .then(m => m.PagamentoModule) 
    },
    { 
      path: 'comissao', 
      loadChildren: () => import('../pages/comissao/comissao.module')
      .then(m => m.ComissaoModule) 
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

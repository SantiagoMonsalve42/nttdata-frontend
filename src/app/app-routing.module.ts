import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './commons/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children:[
      {
        path: 'api',
        loadChildren:  () => import('./countries/countries.module').then(m => m.CountriesModule)
      },{
        path: '**',
        redirectTo: 'api'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

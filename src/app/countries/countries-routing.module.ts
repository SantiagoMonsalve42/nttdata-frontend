import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './pages/country/country.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'',
  children:[
    {
      path: 'country/:id',
      component:CountryComponent
    },
    {
      path: 'search',
      component:SearchComponent
    },
    {
      path: '**',
      redirectTo:'search'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }

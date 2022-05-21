import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CountriesRoutingModule } from './countries-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { CountryComponent } from './pages/country/country.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [
    SearchComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    CommonsModule
  ]
})
export class CountriesModule { }

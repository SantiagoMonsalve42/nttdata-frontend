import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input/input.component';
import { SelectComponent } from './components/select/select/select.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    InputComponent,
    SelectComponent
  ]
})
export class CommonsModule {
}

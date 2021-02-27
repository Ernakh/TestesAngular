import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { TesteNgIfNgForComponent } from './teste-ng-if-ng-for/teste-ng-if-ng-for.component';
import { TesteCRUDComponent } from './teste-crud/teste-crud.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TesteCRUD2Component } from './teste-crud2/teste-crud2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomelazyComponent } from './homelazy/homelazy.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TesteComponenteComponent,
    TesteNgIfNgForComponent,
    TesteCRUDComponent,
    TesteCRUD2Component,
      HeaderComponent,
      FooterComponent,
      HomelazyComponent,
      FormularioComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

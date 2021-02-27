import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { TesteCRUD2Component } from './teste-crud2/teste-crud2.component';
import { TesteNgIfNgForComponent } from './teste-ng-if-ng-for/teste-ng-if-ng-for.component';

const routes: Routes = [

  { path: 'data-binding-component', component: DataBindingComponent },
  { path: 'teste1', component: TesteComponenteComponent },
  {path:'iffor', component:TesteNgIfNgForComponent},
  {path:'app-teste-crud2', component:TesteCRUD2Component},
  {path:'appformulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

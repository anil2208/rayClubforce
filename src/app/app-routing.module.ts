import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
   path : '',
   pathMatch: 'full',
   redirectTo : '/list'
  },
  {
    path: 'list',
    component : ListComponent
  },
  {
    path: 'create',
    component : CreateComponent
  },
  {
    path: 'create/:id',
    component : CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

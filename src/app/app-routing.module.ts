import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertPizzaComponent } from './insert-pizza/insert-pizza.component';
import { HomeComponent } from './home/home.component';
import { ViewPizzaComponent } from './view-pizza/view-pizza.component';
import { DeletePizzaComponent } from './delete-pizza/delete-pizza.component';


const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'insert',
  component: InsertPizzaComponent
},
{
  path: 'view',
  component: ViewPizzaComponent
},
{
  path: 'delete',
  component: DeletePizzaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

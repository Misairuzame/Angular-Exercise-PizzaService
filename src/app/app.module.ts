import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertPizzaComponent } from './insert-pizza/insert-pizza.component';
import { HomeComponent } from './home/home.component';
import { ViewPizzaComponent } from './view-pizza/view-pizza.component';
import { DeletePizzaComponent } from './delete-pizza/delete-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertPizzaComponent,
    HomeComponent,
    ViewPizzaComponent,
    DeletePizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

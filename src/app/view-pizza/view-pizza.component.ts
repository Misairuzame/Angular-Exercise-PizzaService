import { Component, OnInit } from '@angular/core';
import { PizzaDBService } from '../pizza-db.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-view-pizza',
  templateUrl: './view-pizza.component.html',
  styleUrls: ['./view-pizza.component.css']
})
export class ViewPizzaComponent implements OnInit {

  pizzas: any;

  constructor(private pizzaDB: PizzaDBService) {
    this.pizzas = pizzaDB.getPizzas();
  }

  ngOnInit() {
  }

}

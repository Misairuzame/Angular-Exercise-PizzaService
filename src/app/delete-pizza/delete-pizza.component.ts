import { Component, OnInit } from '@angular/core';
import { PizzaDBService } from '../pizza-db.service';

@Component({
  selector: 'app-delete-pizza',
  templateUrl: './delete-pizza.component.html',
  styleUrls: ['./delete-pizza.component.css']
})
export class DeletePizzaComponent implements OnInit {

  pizzas: any;
  delList: Array<number>;

  constructor(private pizzaDB: PizzaDBService) {
    this.pizzas = pizzaDB.getPizzas();
    this.delList = [];
  }

  ngOnInit() {
  }

  addToDelList(pizzaId: number) {
    this.delList.push(pizzaId);
    let element = document.getElementById(pizzaId.toString()) as HTMLInputElement;
    element.disabled = true;
  }

  remove() {
    let i: number;
    for(i=0; i < this.delList.length; i++) {
      this.pizzaDB.deletePizzaIndex(this.delList[i]);
    }
    this.delList = [];
  }

}
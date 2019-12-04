import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaDBService {

  private database: Array<Pizza>;
  private progrId: number;

  constructor() {
    this.database = [];
    this.progrId = 0;
  }

  getLength() {
    return this.database.length;
  }

  getId() {
    return this.progrId;
  }

  incrementCounter() {
    this.progrId++;
  }

  /**
   * @param pizzaId L'ID della pizza della quale trovare
   * l'indice.
   * 
   * E' possibile modificare questa funzione
   * in caso si voglia usare un ID unico in formati diversi,
   * ad esempio un UUID, una stringa alfanumerica, ... .
   * Al momento l'ID usato è un numero progressivo, che non
   * viene mai resettato.
   */
  findPizzaIndex(pizzaId: number) {
    let i: number;
    for(i=0; i<this.database.length; i++) {
      if(pizzaId === this.database[i].id) {
        return i;
      }
    }
  }

  insert(newPizza: Pizza) {
    this.database.push(newPizza);
  }

  getPizzas() {
    return this.database;
  }

  deletePizzaIndex(index: number) {
    let toDelIndex = this.findPizzaIndex(index);
    if(toDelIndex !== -1) {
      this.database.splice(toDelIndex, 1);
    }
  }

}

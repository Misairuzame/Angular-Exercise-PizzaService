import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Pizza } from '../pizza';
import { PizzaDBService } from '../pizza-db.service';

@Component({
  selector: 'app-insert-pizza',
  templateUrl: './insert-pizza.component.html',
  styleUrls: ['./insert-pizza.component.css']
})
export class InsertPizzaComponent implements OnInit {

  private submitted: boolean;
  private tempPizza: Pizza;
  private anchor: Node;
  private successDiv: HTMLDivElement;
  private show: boolean;
  insertPizzaForm: any;
  
  constructor(private pizzaDB: PizzaDBService) {
    this.submitted = false;
    this.tempPizza = new Pizza('', '', '', pizzaDB.getId());
    this.show = false;
  }

  ngOnInit() {
    this.insertPizzaForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[\\w\\s]*$')]),
      description: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.pattern('^[\\w\\s,]*$')]),
      price: new FormControl('', [Validators.required, Validators.maxLength(5), Validators.pattern('^\\d{1,2}[.,]\\d{2}$')])
    });

    this.anchor = document.getElementById("anchor") as Node;
    this.successDiv = document.createElement("div");
    this.successDiv.innerHTML = `
    <div class="alert alert-success" role="alert" id="success">
        <strong>Success!</strong> Pizza inserted successfully!<br/>
        You can insert more pizzas.
    </div>
    `;
  }

  onSubmit() {
    this.submitted = true;
    this.tempPizza.name = this.insertPizzaForm.value.name;
    this.tempPizza.description = this.insertPizzaForm.value.description;
    this.tempPizza.price = this.insertPizzaForm.value.price;
    this.tempPizza.id = this.pizzaDB.getId();

    this.pizzaDB.insert(this.tempPizza);

    this.show = true;
    this.anchor.appendChild(this.successDiv);

    this.pizzaDB.incrementCounter();
    this.tempPizza = new Pizza('', '', '', this.pizzaDB.getId());

    this.insertPizzaForm.reset();
    this.submitted = false;
  }

  showDiv() { return !this.show; }

}

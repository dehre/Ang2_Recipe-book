import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {

  items:Ingredient[] = [
    new Ingredient('Tomatoes',4),
    new Ingredient('Potatoes',12),
    new Ingredient('Butter',2)
  ]

}

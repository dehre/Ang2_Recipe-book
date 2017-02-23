import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  @Output() cleared = new EventEmitter();
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private sls:ShoppingListService){}

  ngOnChanges(changes){
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {name:null,amount:null};
    } else {
      this.isAdd = false
    }
  }

  onSubmit(ingredient:Ingredient){
    const newIngredient = new Ingredient(ingredient.name,ingredient.amount)
    if(!this.isAdd){
      this.sls.editItem(this.item,newIngredient);
      this.onClear();
    } else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

  onDelete(item:Ingredient){
    this.sls.deleteItem(item);
    this.onClear();
  }
  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }

}

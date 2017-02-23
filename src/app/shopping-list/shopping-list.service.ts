import {Ingredient} from "../shared/ingredient";

export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items
  }
  addItems(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items)
  }
  addItem(item: Ingredient){
    this.items.push(item)
  }
  editItem(oldItem:Ingredient,newItem:Ingredient){
    this.items[this.items.indexOf(oldItem)] = newItem
  }
  deleteItem(item:Ingredient){
    let i = this.items.indexOf(item);
    if(i != -1){
      this.items.splice(i,1)
    }
  }

}

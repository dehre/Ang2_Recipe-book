import { Component, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  // RECIPE LIST HERE
  recipes: Recipe[] = [
    new Recipe('Pasta','So good','http://i.ndtvimg.com/i/2015-12/pasta_625x350_41450937320.jpg',[]),
    new Recipe('Rice','Very light food','http://www.makingindia.co/wp-content/uploads/2016/10/rice.jpg',[])
  ];

  // EMIT AN EVENT TO PASS THE RECIPE THROUGH RECIPES.TS TO RECIPE-DETAIL
  @Output() recipeSelected = new EventEmitter<Recipe>();

  // METHOD CALLED CLICKING THE RECIPE-ITEM TAG
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }

}

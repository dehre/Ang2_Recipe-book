import { Component, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  // RECIPE LIST HERE
  recipes: Recipe[] = [];

  // DUMMY RECIPE
  recipe: Recipe = new Recipe('Dummy','Description','http://guides.global/images/guides/global/dummy_web_page.jpg')

  // EMIT AN EVENT TO PASS THE RECIPE THROUGH RECIPES.TS TO RECIPE-DETAIL
  @Output() recipeSelected = new EventEmitter<Recipe>();

  // METHOD CALLED CLICKING THE RECIPE-ITEM TAG
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(this.recipe)
  }

}

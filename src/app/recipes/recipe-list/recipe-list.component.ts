import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  constructor(
    private recipeService:RecipeService
  ){}

  recipes: Recipe[] = [];

  // EMIT AN EVENT TO PASS THE RECIPE THROUGH RECIPES.TS TO RECIPE-DETAIL
  @Output() recipeSelected = new EventEmitter<Recipe>();

  // METHOD CALLED CLICKING THE RECIPE-ITEM TAG
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

}

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

  // METHOD CALLED CLICKING THE RECIPE-ITEM TAG
  onSelected(recipe: Recipe){

  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

}

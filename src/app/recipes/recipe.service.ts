import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  // RECIPE LIST HERE
  private recipes: Recipe[] = [
    new Recipe('Pasta','So good','http://i.ndtvimg.com/i/2015-12/pasta_625x350_41450937320.jpg',[
      new Ingredient('French fries',2),
      new Ingredient('Pork meat',1),
    ]),
    new Recipe('Rice','Very light food','http://www.makingindia.co/wp-content/uploads/2016/10/rice.jpg',[
      new Ingredient('Vegetables',4),
      new Ingredient('Fruit',2)
    ])
  ];

  getRecipes(){
    return this.recipes
  }

  getRecipe(id:number){
    return this.recipes[id]
  }

}

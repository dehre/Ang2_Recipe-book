import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

  // RECIPE LIST HERE
  private recipes: Recipe[] = [
    new Recipe('Pasta','So good','http://i.ndtvimg.com/i/2015-12/pasta_625x350_41450937320.jpg',[]),
    new Recipe('Rice','Very light food','http://www.makingindia.co/wp-content/uploads/2016/10/rice.jpg',[])
  ];

  getRecipes(){
    return this.recipes
  }

}

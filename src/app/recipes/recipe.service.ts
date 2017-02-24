import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import "rxjs/Rx";

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

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

  constructor(private http:Http){}

  getRecipes(){
    return this.recipes
  }

  getRecipe(id:number){
    return this.recipes[id]
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe:Recipe,newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1)
  }

  storeData(){
    const body= JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://angular2-course-4d245.firebaseio.com/recipes.json',body,{headers:headers});
  }

  fetchData(){
    return this.http.get('https://angular2-course-4d245.firebaseio.com/recipes.json')
      .map((response:Response)=>response.json())
      .subscribe(
        (data: Recipe[])=>{
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      )
  }

}

import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  recipes: Recipe[] = [];

  recipe: Recipe = new Recipe('Dummy','Description','http://guides.global/images/guides/global/dummy_web_page.jpg')

}

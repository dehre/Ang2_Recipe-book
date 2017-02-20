import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
  selectedRecipe:Recipe;
}

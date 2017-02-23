import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipeForm:FormGroup;
  private subscription:Subscription;
  private recipeIndex:number;
  private recipe:Recipe;
  private isNew = true;

  constructor(
    private route:ActivatedRoute,
    private recipeService:RecipeService,
    private formBuilder:FormBuilder){}

  ngOnInit(){
    this.subscription = this.route.params.subscribe(
      (param:any)=>{
        if(param.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndex = +param['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients:FormArray = new FormArray([]);

    if(!this.isNew){
      for(let i=0; i<this.recipe.ingredients.length;i++){
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
          })
        )
      }
      recipeName=this.recipe.name;
      recipeImageUrl=this.recipe.imagePath;
      recipeContent=this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    })
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

}

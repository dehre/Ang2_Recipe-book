import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {HomeComponent} from "./home.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const APP_ROUTES:Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: "app/recipes/recipes.module#RecipesModule"},
  {path: 'shopping-list', component: ShoppingListComponent}
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

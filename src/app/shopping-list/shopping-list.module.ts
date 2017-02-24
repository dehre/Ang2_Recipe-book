import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListAddComponent } from "./shopping-list-add.component";



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports : [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ShoppingListModule {}

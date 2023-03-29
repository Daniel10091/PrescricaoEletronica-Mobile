import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleRecipePageRoutingModule } from './simple-recipe-routing.module';

import { SimpleRecipePage } from './simple-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleRecipePageRoutingModule
  ],
  // declarations: [SimpleRecipePage]
})
export class SimpleRecipePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleRecipePage } from './simple-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: SimpleRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleRecipePageRoutingModule {}

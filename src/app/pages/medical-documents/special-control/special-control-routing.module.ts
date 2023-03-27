import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialControlPage } from './special-control.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialControlPageRoutingModule {}

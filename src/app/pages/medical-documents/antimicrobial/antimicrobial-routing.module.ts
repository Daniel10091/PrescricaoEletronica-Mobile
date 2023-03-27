import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntimicrobialPage } from './antimicrobial.page';

const routes: Routes = [
  {
    path: '',
    component: AntimicrobialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntimicrobialPageRoutingModule {}

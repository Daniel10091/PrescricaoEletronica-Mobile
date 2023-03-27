import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalAdvicePage } from './technical-advice.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalAdvicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalAdvicePageRoutingModule {}

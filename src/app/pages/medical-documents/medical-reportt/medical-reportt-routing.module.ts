import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalReporttPage } from './medical-reportt.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalReporttPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalReporttPageRoutingModule {}

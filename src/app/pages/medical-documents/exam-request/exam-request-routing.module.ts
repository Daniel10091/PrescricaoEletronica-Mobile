import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamRequestPage } from './exam-request.page';

const routes: Routes = [
  {
    path: '',
    component: ExamRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRequestPageRoutingModule {}

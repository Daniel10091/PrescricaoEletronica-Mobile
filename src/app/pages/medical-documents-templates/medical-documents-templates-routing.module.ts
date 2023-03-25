import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalDocumentsTemplatesPage } from './medical-documents-templates.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalDocumentsTemplatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalDocumentsTemplatesPageRoutingModule {}

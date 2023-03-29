import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalDocumentsTemplatesPageRoutingModule } from './medical-documents-templates-routing.module';

import { MedicalDocumentsTemplatesPage } from './medical-documents-templates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalDocumentsTemplatesPageRoutingModule
  ],
  // declarations: [MedicalDocumentsTemplatesPage]
})
export class MedicalDocumentsTemplatesPageModule {}

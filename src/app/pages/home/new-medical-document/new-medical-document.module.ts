import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMedicalDocumentPageRoutingModule } from './new-medical-document-routing.module';

import { NewMedicalDocumentPage } from './new-medical-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMedicalDocumentPageRoutingModule
  ],
  declarations: [NewMedicalDocumentPage]
})
export class NewMedicalDocumentPageModule {}

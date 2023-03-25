import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMedicalDocumentsPageRoutingModule } from './my-medical-documents-routing.module';

import { MyMedicalDocumentsPage } from './my-medical-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMedicalDocumentsPageRoutingModule
  ],
  declarations: [MyMedicalDocumentsPage]
})
export class MyMedicalDocumentsPageModule {}

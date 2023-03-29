import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';

import { NewMedicalDocumentsComponent } from '../modules/new-medical-documents/new-medical-documents.component';

import { AntimicrobialPage } from './medical-documents/antimicrobial/antimicrobial.page';
import { ExamRequestPage } from './medical-documents/exam-request/exam-request.page';
import { MedicalCertificatePage } from './medical-documents/medical-certificate/medical-certificate.page';
import { MedicalReportPage } from './medical-documents/medical-report/medical-report.page';
import { MedicalReporttPage } from './medical-documents/medical-reportt/medical-reportt.page';
import { SimpleRecipePage } from './medical-documents/simple-recipe/simple-recipe.page';
import { SpecialControlPage } from './medical-documents/special-control/special-control.page';
import { TechnicalAdvicePage } from './medical-documents/technical-advice/technical-advice.page';

import { HomePage } from './home/home.page';
import { PatientsPage } from './patients/patients.page';
import { ServicesLocationsPage } from './services-locations/services-locations.page';
import { MyMedicalDocumentsPage } from './my-medical-documents/my-medical-documents.page';
import { MedicalDocumentsTemplatesPage } from './medical-documents-templates/medical-documents-templates.page';
import { ExitPage } from './exit/exit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent, 
    NewMedicalDocumentsComponent,
    MedicalCertificatePage,
    SimpleRecipePage,
    ExamRequestPage,
    MedicalReportPage,
    AntimicrobialPage,
    SpecialControlPage,
    MedicalReporttPage,
    TechnicalAdvicePage,
    HomePage,
    PatientsPage,
    ServicesLocationsPage,
    MyMedicalDocumentsPage,
    MedicalDocumentsTemplatesPage,
    ExitPage,
  ]
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalReportPageRoutingModule } from './medical-report-routing.module';

import { MedicalReportPage } from './medical-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalReportPageRoutingModule
  ],
  declarations: [MedicalReportPage]
})
export class MedicalReportPageModule {}

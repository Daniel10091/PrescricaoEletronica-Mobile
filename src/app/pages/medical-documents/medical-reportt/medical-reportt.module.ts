import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalReporttPageRoutingModule } from './medical-reportt-routing.module';

import { MedicalReporttPage } from './medical-reportt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalReporttPageRoutingModule
  ],
  declarations: [MedicalReporttPage]
})
export class MedicalReporttPageModule {}

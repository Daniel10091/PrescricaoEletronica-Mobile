import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamRequestPageRoutingModule } from './exam-request-routing.module';

import { ExamRequestPage } from './exam-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamRequestPageRoutingModule
  ],
  declarations: [ExamRequestPage]
})
export class ExamRequestPageModule {}

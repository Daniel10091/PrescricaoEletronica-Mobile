import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalAdvicePageRoutingModule } from './technical-advice-routing.module';

import { TechnicalAdvicePage } from './technical-advice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalAdvicePageRoutingModule
  ],
  declarations: [TechnicalAdvicePage]
})
export class TechnicalAdvicePageModule {}

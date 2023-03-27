import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialControlPageRoutingModule } from './special-control-routing.module';

import { SpecialControlPage } from './special-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialControlPageRoutingModule
  ],
  declarations: [SpecialControlPage]
})
export class SpecialControlPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntimicrobialPageRoutingModule } from './antimicrobial-routing.module';

import { AntimicrobialPage } from './antimicrobial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntimicrobialPageRoutingModule
  ],
  // declarations: [AntimicrobialPage]
})
export class AntimicrobialPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesLocationsPageRoutingModule } from './services-locations-routing.module';

import { ServicesLocationsPage } from './services-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesLocationsPageRoutingModule
  ],
  // declarations: [ServicesLocationsPage]
})
export class ServicesLocationsPageModule {}

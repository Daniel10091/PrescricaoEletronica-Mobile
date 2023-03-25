import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesLocationsPage } from './services-locations.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesLocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesLocationsPageRoutingModule {}

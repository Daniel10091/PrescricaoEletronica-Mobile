import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./patients/patients.module').then( m => m.PatientsPageModule)
  },
  {
    path: 'locais-de-atendimento',
    loadChildren: () => import('./services-locations/services-locations.module').then( m => m.ServicesLocationsPageModule)
  },
  {
    path: 'meus-documentos-medicos',
    loadChildren: () => import('./my-medical-documents/my-medical-documents.module').then( m => m.MyMedicalDocumentsPageModule)
  },
  {
    path: 'modelos-de-documentos-medicos',
    loadChildren: () => import('./medical-documents-templates/medical-documents-templates.module').then( m => m.MedicalDocumentsTemplatesPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./exit/exit.module').then( m => m.ExitPageModule)
  },
  {
    path: 'novo-documento-medico',
    loadChildren: () => import('./home/new-medical-document/new-medical-document.module').then( m => m.NewMedicalDocumentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

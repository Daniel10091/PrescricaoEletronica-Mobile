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
    path: 'atestado-medico',
    loadChildren: () => import('./medical-documents/medical-certificate/medical-certificate.module').then( m => m.MedicalCertificatePageModule)
  },
  {
    path: 'receita-simples',
    loadChildren: () => import('./medical-documents/simple-recipe/simple-recipe.module').then( m => m.SimpleRecipePageModule)
  },
  {
    path: 'solicitacao-de-exame',
    loadChildren: () => import('./medical-documents/exam-request/exam-request.module').then( m => m.ExamRequestPageModule)
  },
  {
    path: 'relatorio-medico',
    loadChildren: () => import('./medical-documents/medical-report/medical-report.module').then( m => m.MedicalReportPageModule)
  },
  {
    path: 'antimicrobiano',
    loadChildren: () => import('./medical-documents/antimicrobial/antimicrobial.module').then( m => m.AntimicrobialPageModule)
  },
  {
    path: 'controle-especial',
    loadChildren: () => import('./medical-documents/special-control/special-control.module').then( m => m.SpecialControlPageModule)
  },
  {
    path: 'laudo-medico',
    loadChildren: () => import('./medical-documents/medical-reportt/medical-reportt.module').then( m => m.MedicalReporttPageModule)
  },
  {
    path: 'parecer-tecnico',
    loadChildren: () => import('./medical-documents/technical-advice/technical-advice.module').then( m => m.TechnicalAdvicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

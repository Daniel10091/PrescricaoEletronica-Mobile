import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Início', url: '/pages/inicio', icon: 'home' },
    { title: 'Pacientes', url: '/pages/pacientes', icon: 'person' },
    { title: 'Locais de Atendimento', url: '/pages/locais-de-atendimento', icon: 'location' },
    { title: 'Meus documentos médicos', url: '/pages/meus-documentos-medicos', icon: 'documents' },
    { title: 'Modelos de documentos médicos', url: '/pages/modelos-de-documentos-medicos', icon: 'document-text' },
    { title: 'Sair', url: '/pages/sair', icon: 'exit' },
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {}

}

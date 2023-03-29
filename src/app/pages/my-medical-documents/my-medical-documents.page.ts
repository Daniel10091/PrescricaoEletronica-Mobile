import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-medical-documents',
  templateUrl: './my-medical-documents.page.html',
  styleUrls: ['./my-medical-documents.page.scss'],
})
export class MyMedicalDocumentsPage implements OnInit {

  public documentTypes: any[] = [
    { id: 1, value: 'todos', title: 'Todos' },
    { id: 2, value: 'atestado-medico', title: 'Atestado Médico' },
    { id: 3, value: 'receita-simples', title: 'Receita Simples' },
    { id: 4, value: 'solicitacao-de-exame', title: 'Solicitação de Exame' },
    { id: 5, value: 'relatorio-medico', title: 'Relatório Médico' },
    { id: 6, value: 'antimicrobiano', title: 'Antimicrobiano' },
    { id: 7, value: 'controle-especial', title: 'Controle Especial' },
    { id: 8, value: 'laudo-medico', title: 'Laudo Médico' },
    { id: 9, value: 'parecer-tecnico', title: 'Parecer Técnico' },
  ];

  constructor() { }

  ngOnInit(): any {
    if (localStorage.getItem('reload') === 'true') {
      document.location.reload();
      localStorage.setItem('reload', 'false');
    }
  }

}

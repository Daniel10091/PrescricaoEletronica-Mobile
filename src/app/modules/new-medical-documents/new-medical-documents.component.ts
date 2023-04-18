import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-new-medical-documents',
  templateUrl: './new-medical-documents.component.html',
  styleUrls: ['./new-medical-documents.component.scss'],
})
export class NewMedicalDocumentsComponent  implements OnInit {

  public signingInfoVisible: boolean = false;
  public signingInfoIsVisible: string = "";

  public crms: any[] = [
    { id: 1, value: 'CRM-1', title: 'CRM-1' },
    { id: 2, value: 'CRM-2', title: 'CRM-2' },
  ];

  public canDismiss = true;
  public presentingElement = null;

  public enableDocumentCreation: boolean = true;

  public documentTypes: any[] = [
    { id: 1, value: 'atestado-medico', title: 'Atestado Médico' },
    { id: 2, value: 'receita-simples', title: 'Receita Simples' },
    { id: 3, value: 'solicitacao-de-exame', title: 'Solicitação de Exame' },
    { id: 4, value: 'relatorio-medico', title: 'Relatório Médico' },
    { id: 5, value: 'antimicrobiano', title: 'Antimicrobiano' },
    { id: 6, value: 'controle-especial', title: 'Controle Especial' },
    { id: 7, value: 'laudo-medico', title: 'Laudo Médico' },
    { id: 8, value: 'parecer-tecnico', title: 'Parecer Técnico' },
  ];

  public servicesLocations: any[] = [
    { id: 1, value: '1', title: 'Local 1' },
    { id: 2, value: '2', title: 'Local 2' },
    { id: 3, value: '3', title: 'Local 3' },
  ];

  public documentModels: any[] = [
    { id: 1, value: '1', title: 'Modelo 1', },
    { id: 2, value: '2', title: 'Modelo 2', },
    { id: 3, value: '3', title: 'Modelo 3', },
  ];

  public newDocument: any = {
    documentType: null,
    serviceLocation: localStorage.getItem('serviceLocation') != null ? 
        localStorage.getItem('serviceLocation') 
      : this.servicesLocations[0].value,
    documentModels: null,
    cpfOnMedicalDocument: null,
    patientAddressOnMedicalDocument: null
  }

  public cpfOnMedicalDocument: boolean;

  public patientAddressOnMedicalDocument: boolean;

  constructor(private router: Router) { }

  ngOnInit(): any {
    this.presentingElement = document.querySelector('.page');

    if (!localStorage.getItem('serviceLocation')) 
      localStorage.setItem('serviceLocation', this.servicesLocations[0].value)
    if (localStorage.getItem('documentModel') != null) 
      localStorage.setItem('documentModel', null);
    if (!localStorage.getItem('cpfOnMedicalDocument')) 
      localStorage.setItem('cpfOnMedicalDocument', 'false');
    if (!localStorage.getItem('patientAddressOnMedicalDocument')) 
      localStorage.setItem('patientAddressOnMedicalDocument', 'false');

    this.cpfOnMedicalDocument = localStorage.getItem('cpfOnMedicalDocument') != null ? 
        localStorage.getItem('cpfOnMedicalDocument') == 'true' ? true : false 
      : false;
    this.patientAddressOnMedicalDocument = localStorage.getItem('patientAddressOnMedicalDocument') != null ? 
        localStorage.getItem('patientAddressOnMedicalDocument') == 'true' ? true : false 
      : false;
    
    this.newDocument.cpfOnMedicalDocument = localStorage.getItem('cpfOnMedicalDocument') != null ? 
        localStorage.getItem('cpfOnMedicalDocument') 
      : null;
    this.newDocument.patientAddressOnMedicalDocument = localStorage.getItem('patientAddressOnMedicalDocument') != null ? 
        localStorage.getItem('patientAddressOnMedicalDocument') 
      : null;
  }

  public showSigningInfo(): any {
    this.signingInfoIsVisible != "is-visible" ? this.signingInfoIsVisible = "is-visible" : this.signingInfoIsVisible = "";
  }

  public onDocumentTypeChanged(event: Event): any {
    const ev = event as CheckboxCustomEvent;

    this.newDocument.documentType = ev.detail.value;
    localStorage.setItem('documentType', ev.detail.value);

    this.enableDocumentCreation = false;
  }

  public onServiceLocationChanged(event: Event): any {
    const ev = event as CheckboxCustomEvent;

    this.newDocument.serviceLocation = ev.detail.value;
    localStorage.setItem('serviceLocation', ev.detail.value);
  }

  public onDocumentModelChanged(event: Event): any {
    const ev = event as CheckboxCustomEvent;

    this.newDocument.documentModel = ev.detail.value;
    localStorage.setItem('documentModel', ev.detail.value);
  }

  public onCpfOnMedicalDocumentChanged(event: Event): any {
    const ev = event as CheckboxCustomEvent;

    this.cpfOnMedicalDocument = ev.detail.checked;
    localStorage.setItem('cpfOnMedicalDocument', ev.detail.checked.toString());
  }

  public onPatientAddressOnMedicalDocumentChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;

    this.patientAddressOnMedicalDocument = ev.detail.checked;
    localStorage.setItem('patientAddressOnMedicalDocument', ev.detail.checked.toString());
  }

  public newMedicalDocument(): any {
    console.log(this.newDocument);

    this.enableDocumentCreation = true;
    
    localStorage.setItem('documentModel', null);
    
    const page = localStorage.getItem('documentType');
    
    setTimeout(() => {
      this.router.navigate(['/pages/' + page]);
    }, 300);
  }

}

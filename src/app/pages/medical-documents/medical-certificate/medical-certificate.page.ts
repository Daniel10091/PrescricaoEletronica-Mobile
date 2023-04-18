import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-medical-certificate',
  templateUrl: './medical-certificate.page.html',
  styleUrls: ['./medical-certificate.page.scss'],
})
export class MedicalCertificatePage implements OnInit {

  public documentModels: any[] = [
    { id: 1, name: 'model', title: 'Modelo' },
  ];

  public servicesLocations: any[] = [
    { id: 1, value: '1', title: 'Local 1' },
    { id: 2, value: '2', title: 'Local 2' },
    { id: 3, value: '3', title: 'Local 3' },
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

  constructor(private toastController: ToastController) { }

  ngOnInit(): any {
    if (!localStorage.getItem('serviceLocation')) 
      localStorage.setItem('serviceLocation', this.servicesLocations[0].value)
  }

  public onServiceLocationChanged(event: Event): any {
    const ev = event as CheckboxCustomEvent;

    this.newDocument.serviceLocation = ev.detail.value;
    localStorage.setItem('serviceLocation', ev.detail.value);
  }
  
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Documento salvo com sucesso!',
      duration: 1500,
      position: position,
      color: 'primary'
    });

    await toast.present();
  }

}

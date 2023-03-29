import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-medical-certificate',
  templateUrl: './medical-certificate.page.html',
  styleUrls: ['./medical-certificate.page.scss'],
})
export class MedicalCertificatePage implements OnInit {

  public documentModels: any[] = [
    { id: 1, name: 'model', title: 'Modelo' },
  ];

  constructor(private toastController: ToastController) { }

  ngOnInit(): any {
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

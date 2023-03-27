import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-certificate',
  templateUrl: './medical-certificate.page.html',
  styleUrls: ['./medical-certificate.page.scss'],
})
export class MedicalCertificatePage implements OnInit {

  public documentModels: any[] = [
    { id: 1, name: 'model', title: 'Modelo' },
  ];

  constructor() { }

  ngOnInit(): any {
  }

}

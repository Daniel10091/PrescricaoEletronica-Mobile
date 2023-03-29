import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-documents-templates',
  templateUrl: './medical-documents-templates.page.html',
  styleUrls: ['./medical-documents-templates.page.scss'],
})
export class MedicalDocumentsTemplatesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('reload') === 'true') {
      document.location.reload();
      localStorage.setItem('reload', 'false');
    }
  }

}

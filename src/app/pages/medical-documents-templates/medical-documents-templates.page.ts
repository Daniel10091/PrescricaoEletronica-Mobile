import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-documents-templates',
  templateUrl: './medical-documents-templates.page.html',
  styleUrls: ['./medical-documents-templates.page.scss'],
})
export class MedicalDocumentsTemplatesPage implements OnInit {

  public page!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

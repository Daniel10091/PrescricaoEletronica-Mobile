import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-medical-documents',
  templateUrl: './my-medical-documents.page.html',
  styleUrls: ['./my-medical-documents.page.scss'],
})
export class MyMedicalDocumentsPage implements OnInit {

  public page!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

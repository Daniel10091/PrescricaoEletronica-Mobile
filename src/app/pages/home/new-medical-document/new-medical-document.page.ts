import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-medical-document',
  templateUrl: './new-medical-document.page.html',
  styleUrls: ['./new-medical-document.page.scss'],
})
export class NewMedicalDocumentPage implements OnInit {

  public page!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  public page!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

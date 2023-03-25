import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent  implements OnInit {

  public page!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

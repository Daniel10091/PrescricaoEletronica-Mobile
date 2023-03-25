import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-locations',
  templateUrl: './services-locations.page.html',
  styleUrls: ['./services-locations.page.scss'],
})
export class ServicesLocationsPage implements OnInit {

  public page!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

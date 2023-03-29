import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-locations',
  templateUrl: './services-locations.page.html',
  styleUrls: ['./services-locations.page.scss'],
})
export class ServicesLocationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('reload') === 'true') {
      document.location.reload();
      localStorage.setItem('reload', 'false');
    }
  }

}

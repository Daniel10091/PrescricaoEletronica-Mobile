import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public signingInfoVisible: boolean = false;
  public signingInfoIsVisible: string = "";

  public crms: any[] = [
    { id: 1, value: 'CRM-1', title: 'CRM-1' },
    { id: 2, value: 'CRM-2', title: 'CRM-2' },
  ];

  constructor() { }

  ngOnInit(): any {
    if (localStorage.getItem('reload') === 'true') {
      document.location.reload();
      localStorage.setItem('reload', 'false');
    }
  }

  public showSigningInfo(): any {
    this.signingInfoIsVisible != "is-visible" ? this.signingInfoIsVisible = "is-visible" : this.signingInfoIsVisible = "";
  }

}

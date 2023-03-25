import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public ufs: any[] = [
    { value: 'AC', title: 'AC' },
    { value: 'AL', title: 'AL' },
    { value: 'AM', title: 'AM' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('reload') === 'true') {
      document.location.reload();
      localStorage.setItem('reload', 'false');
    }
  }

  public login() {
    this.router.navigate(['/pages/inicio']);
  }

}

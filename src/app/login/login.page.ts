import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, SelectCustomEvent } from '@ionic/angular';

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

  public inputModel = '';
  
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  public loginFieldIsEmpty: boolean = false;
  public ufFieldIsEmpty: boolean = false;
  public passwordFieldIsEmpty: boolean = false;

  public disableLoginButton: boolean = true;
  
  public loginData: any = {
    loginValue: null,
    ufValue: null,
    passwordValue: null,
  }
  // public loginValue: string = null;
  // public ufValue: string = null;
  // public passwordValue: string = null;
  public invalidLogin: string = '';
  public invalidUf: string = '';
  public invalidPassword: string = '';  

  constructor(private router: Router) { }

  ngOnInit(): any {
    if (localStorage.getItem('reload') === 'true') {
      document.location.reload();
      localStorage.setItem('reload', 'false');
    }
  }

  onInput(ev: any): any {
    const value = ev.target!.value;
    
    const filteredValue = value.replace(/[^0-9]+/g,'');
    
    this.ionInputEl.value = this.inputModel = filteredValue;
  }

  public onLoginInput(event: any): any {
    this.loginData.loginValue = event.target!.value;

    if (this.loginData.loginValue != null && this.loginData.loginValue != '') 
      this.invalidLogin = '';
    else this.invalidLogin = 'is-null';
  }

  public onUfChanged(event: Event): any {
    const ev = event as SelectCustomEvent;

    this.loginData.ufValue = ev.target.value[0];

    if (this.loginData.ufValue != null && this.loginData.ufValue != '') 
      this.invalidUf = '';
    else this.invalidUf = 'is-null';
  }

  public onPasswordInput(event: any): any {
    this.loginData.passwordValue = event.target!.value;

    if (this.loginData.passwordValue != null && this.loginData.passwordValue != '') 
      this.invalidPassword = '';
    else this.invalidPassword = 'is-null';
  }

  public onValidateLogin(): any {
    if (this.loginData.loginValue != null && this.loginData.loginValue != '') 
      if (this.loginData.ufValue != null && this.loginData.ufValue != '') 
        if (this.loginData.passwordValue != null && this.loginData.passwordValue != '') 
          this.disableLoginButton = false;
        else this.disableLoginButton = true;
      else this.disableLoginButton = true;
    else this.disableLoginButton = true;
  }

  public login(): any {
    if (this.loginData.loginValue != null && this.loginData.loginValue != '') 
      if (this.loginData.ufValue != null && this.loginData.ufValue != '') 
        if (this.loginData.passwordValue != null && this.loginData.passwordValue != '') 
          this.router.navigate(['/pages/inicio']);
  }

}

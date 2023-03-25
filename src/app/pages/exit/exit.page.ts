import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem('reload', 'true');
    this.router.navigate(['/login']);
  }

}

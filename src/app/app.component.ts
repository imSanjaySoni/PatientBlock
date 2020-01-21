import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blockchain-based-EHR';
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToSeeDetails() {
    this.router.navigate(['seedetails']);
  }
  navigateToAddDetails() {
    this.router.navigate(['addPatient']);
  }
}

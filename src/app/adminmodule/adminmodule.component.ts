import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.scss']
})
export class AdminmoduleComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  
  navigateToSeeDetails(){
    this.router.navigate(['admin/seedetails']);
  }
  navigateToAddDetails() {
    this.router.navigate(['adddetails']);
  }
}

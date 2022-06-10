import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from './services/authservice.service';
import { EmployeeDataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;

  constructor(public dataservice: EmployeeDataService,  private authservice: AuthguardService, private router: Router){}

  logout(){
    this.authservice.logoutUser();
    this.router.navigate(['home']);
  }
}

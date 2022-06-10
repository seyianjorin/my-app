import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from '../services/authservice.service';
import { EmployeeDataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  username:string | undefined;
  password:string | undefined;
  retUrl: string | null='home';

  constructor(private authservice: AuthguardService, private router:Router){}

  ngOnInit(): void {
  }
  
  submit(loginForm: any) {  
    this.authservice.login(loginForm.value.username, loginForm.value.password).subscribe(
      data => {
        console.log('return to' + this.retUrl);
        console.log(this.retUrl)
        if(this.retUrl!=null){
          this.router.navigate([this.retUrl]);
        }
        else{
          this.router.navigate(['home']);
        }
      });
  }
}

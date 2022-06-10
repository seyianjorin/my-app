import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { UpdateEmployeeFormComponent } from './update-employee-form/update-employee-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomepageComponent,
    AddEmployeeFormComponent,
    UpdateEmployeeFormComponent,
    EmployeedetailComponent,
    LoginComponent,
    LogoutComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

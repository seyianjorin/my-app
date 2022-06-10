import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouteguardGuard } from './services/routeguard.guard';
import { UpdateEmployeeFormComponent } from './update-employee-form/update-employee-form.component';

const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomepageComponent},
  {path:"employee", component:EmployeeComponent, canActivate: [RouteguardGuard]},
  {path:"employee/view/:id", component: EmployeedetailComponent},
  {path:"employee/add", component:AddEmployeeFormComponent},
  {path:"employee/update/:id", component:UpdateEmployeeFormComponent},
  {path:"login", component: LoginComponent},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

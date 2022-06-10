import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IEmployee } from '../IEmployee';
import { EmployeeDataService } from '../services/data.service';

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.css']
})
export class UpdateEmployeeFormComponent implements OnInit {
  public employeeId: any;
  public employee: any;
  public employees: any;
  constructor(public dataservice: EmployeeDataService, private router:Router, private actRoute: ActivatedRoute){}

  ngOnInit(): void {
   this.actRoute.paramMap.subscribe((params: ParamMap) =>{
     let id = params.get('id');
     this.employeeId = id;
   });
   this.employee = this.dataservice.getEmployeeDetail(this.employeeId).subscribe(
     (data) => {this.employee = data;},
     (error) => {alert`There was an issue in updating this employee's details`}
   );
  }
  
  myFormObject:IEmployee = {
    id:'',
    first_name: '',
    last_name:'',
    department:'',
    salary:''
  }

  submit(form:NgForm) {  
    
    this.dataservice.updateEmployee(this.employee.id, form.value).subscribe(

          (data) => {
            this.employee = data;
            alert("Successfully updated an employee");
            this.router.navigate(["/employee"]);
            this.dataservice.getEmployees().subscribe(
              (data) => this.employees = data,
              (error) => {alert ('There was an issue in getting the employees')}
            )
          },
          (error) => {alert('There was an issue in updating the employee')}
    );
  }

}

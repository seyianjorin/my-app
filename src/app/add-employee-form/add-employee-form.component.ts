import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../IEmployee';
import { EmployeeDataService } from '../services/data.service';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})


export class AddEmployeeFormComponent implements OnInit {

  constructor(public dataservice: EmployeeDataService, private router:Router){}

  ngOnInit(): void {
    // this.myFormObject.id = this.dataservice.genNextId()
  }

  myFormObject:IEmployee = {
    id: '',
    first_name: '',
    last_name:'',
    department:'',
    salary:''
  }

  submit(form:NgForm) {  
    this.dataservice.addNewEmployee(form.value).subscribe(
      {
        
          next: (data) => {
            alert("Successfully created an employee");
            this.router.navigate(["/employee"])
          },
          error:(err) => {alert("There is an issue with creating the employee")}
        }
    )
  }

}

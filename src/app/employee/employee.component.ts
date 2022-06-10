import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { IEmployee } from '../IEmployee';
import { EmployeeDataService } from '../services/data.service';


@Component({
  selector: 'app-employee', 
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  myFormObject:IEmployee = {
    id:0,
    first_name: '',
    last_name:'',
    department:'',
    salary:0
  }

  constructor(public dataservice: EmployeeDataService, private router: Router){}


  ngOnInit(): void {
    this.dataservice.getEmployees().subscribe(
      (data) => { this.dataservice.data = data },
      (error) => {alert ("There is a error with getting the data")},
    )

  }

  deleteEmployee(id:number) {
    let confrm = confirm("Are you sure you want to delete?")
    if(confrm) {
      this.dataservice.delEmployee(id).subscribe(
        {
          next: (data) => {
            alert("Successfully deleted an employee");
            this.dataservice.deleteArow(id);
          },
          error:(err) => {alert("There is an issue with deleting the employee")}
        }
      )
    }
  }
  
  viewEmployee(id:number) {
    this.dataservice.getEmployeeDetail(id).subscribe(
      {
        next: (data:any) => {
          this.dataservice.getEmployeeDetail(data)
        },
        error: (err) => {alert("There is something wrong!")}
      }
    )
}
  onSelect(employee: any){
    this.router.navigate(['/employee/view/', employee.id])
  }

  udpateEmployee(employee: any){
    this.router.navigate(['/employee/update/', employee.id])
  }
}

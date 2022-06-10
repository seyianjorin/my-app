import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeDataService } from '../services/data.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  public employeeId: any;
  public employee: any;
  public errorMsg: any;

  constructor(private route: ActivatedRoute, public dataservice: EmployeeDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = params.get('id');
      console.log(id);
      this.employeeId = id;
      console.log(this.employeeId)
    });

    this.dataservice.getEmployeeDetail(this.employeeId).subscribe(
      (data) => {
        this.employee = data;
        console.log(data);
      },

      (error) => {alert`There was an error in displaying the employee details`}
    )

  }

}

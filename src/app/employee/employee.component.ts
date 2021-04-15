import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private emp:EmployeeService,private route:ActivatedRoute) { }
  employee:Employee[];
  ngOnInit(): void {
    this.employee=this.emp.getEmp();
    let id=this.route.snapshot.params['id'];
    

  }
  empDel(id:number){
    this.emp.delEmp(id);
  }
  
 
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
id:number;
header:string;
em:Employee;
employee:Employee={
  emp_id:0,
  emp_name:"",
  emp_city:""
}
  constructor(private emp:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.header=this.id==0?"Add":"Edit";
    if(this.id!=0){
    this.em=this.emp.getsEmp(this.id);
    console.log("hi"+this.em);
    }
  }
  addEmp(form:NgForm){
      this.employee={
        emp_id:form.value.emp_id,
        emp_name:form.value.emp_name,
        emp_city:form.value.emp_city
      }
      if(this.id==0){
        console.log(this.employee);
      this.emp.addEmp(this.employee);
      }
      else{
        this.emp.editEmp(this.em);
      }


      this.router.navigateByUrl('employee');
    }
  

  }


import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employee:Employee[]=[
  {emp_id:1,emp_name:'akshay',emp_city:'pune'},
  {emp_id:2,emp_name:'abhi',emp_city:'mumbai'},
]
  constructor() { }
  getsEmp(id1:number){
   
    return this.employee.find(x=>x.emp_id==id1);
  }
  editEmp(em:Employee){
    let old:Employee=this.employee.find(x=>x.emp_id===em.emp_id);
    old.emp_id=em.emp_id;
    old.emp_name=em.emp_name;
    old.emp_city=em.emp_city;


  }
  getEmp(){
    return this.employee;
  }
  delEmp(id:number){
let employeee=this.employee.find(x=>x.emp_id===id);
let index=this.employee.indexOf(employeee,0);
this.employee.splice(index,1);

  }
  addEmp(emp:Employee){
    return this.employee.push(emp);

  }
 
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"employee",component:EmployeeComponent},
  {
    path:"employee/:id",component:EmployeeComponent
  },
  {
    path:"editemployee/add/:id",component:EditemployeeComponent
  },
  {
    path:"editemployee/edit/:id",component:EditemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

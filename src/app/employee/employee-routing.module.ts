import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpTaskComponent } from './emp-task/emp-task.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeComponent } from './employee/employee.component';



const routes:Routes=[
    {path:'emp',component:EmployeeComponent,
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:EmployeeHomeComponent},
      {path:'emp_task',component:EmpTaskComponent}
    ]}
];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class EmployeeRoutingModule{ }
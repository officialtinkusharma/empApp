import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpTaskComponent } from './emp-task/emp-task.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

@NgModule({
  declarations: [
    EmpTaskComponent,
    EmployeeComponent,
    EmployeeHomeComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    EmployeeRoutingModule,
    
  ],
  exports:[EmpTaskComponent]
})
export class EmployeeModule { }

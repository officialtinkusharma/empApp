import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular/public-api';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-emp-task',
  templateUrl: './emp-task.component.html',
  styleUrls: ['./emp-task.component.css']
})
export class EmpTaskComponent implements OnInit {

  constructor() { }
columnDefs:ColDef[]=[
{field:'make'},
{field:'model'},
{field:'price'},
];
rowData=[
  { make:'Toyata',model:'Celica',price:35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 }
]
  ngOnInit(): void {
  }

}

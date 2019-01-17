import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewPersonDataSource } from './view-person-datasource';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewPersonDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Id','FirstName', 'LastName','DateOfBirth','Edit','Delete'];

  ngOnInit() {
    this.dataSource = new ViewPersonDataSource(this.paginator, this.sort);
  }
}

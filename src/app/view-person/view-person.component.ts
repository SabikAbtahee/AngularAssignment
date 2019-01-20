import { PersonService } from './../service/person.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewPersonDataSource } from './view-person-datasource';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: ViewPersonDataSource;
  personList=[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  personData:MatTableDataSource<any>;
  displayedColumns :string[]= ['FirstName', 'LastName','Email','Gender','PhoneNumber','Edit','Delete'];

  constructor(private personService:PersonService){

  }

  ngOnInit() {
    this.personService.getPersonList().subscribe(
      list=>{
        this.personList=list.map(item=>{
          
          return{
            $key:item.key,
            ...item.payload.val()
            
          }
          
        });
        this.personData= new MatTableDataSource(this.personList);
      }
    );
    // this.dataSource = new ViewPersonDataSource(this.paginator, this.sort);
  }


  deletePerson(personKey){
    alert("Are you sure to delete this person");
    this.personService.deletePerson(personKey);
    this.personService.getPersonCount();
  }
}

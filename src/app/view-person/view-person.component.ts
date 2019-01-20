import { PersonService } from './../service/person.service';
import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
// import { ViewPersonDataSource } from './view-person-datasource';
import { debug } from 'util';
import { DialogService } from '../service/dialog.service';

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
  displayedColumns :string[]= ['firstName', 'lastName','email','gender','phoneNumber','dob','country','Action'];

  constructor(private personService:PersonService,public dialogService:DialogService){
    this.personService.getPersonCount();
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
        
        
        this.personData.sort=this.sort;
        this.personData.paginator=this.paginator;
      }
    );
    // this.personData = new MatTableDataSource(this.paginator, this.sort);
  }


  deletePerson(personKey){
 
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.personService.deletePerson(personKey);
        
      }
    });
  }



}

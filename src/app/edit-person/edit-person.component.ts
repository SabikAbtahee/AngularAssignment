import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls  : ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  edit = "edit";

  constructor(private personService:PersonService) { }

  ngOnInit(){
    this.personService.getPersonList();
  }
  update(info){
    this.personService.updatePerson(info);
  }


    
}

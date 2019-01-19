import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  edit="edit";

  constructor(private personService:PersonService) { }

  ngOnInit(){
    this.personService.getPersonList();
}
onSubmit() {
  if (!this.personService.personForm.valid) {
    alert("Please fill out the form");
    // insert into firebase if key is null else edit the value.

  }
  else if(this.personService.personForm.valid){
    alert('Thanks for Updating!');
    if(this.personService.personForm.get('$key').value==null){
      this.personService.insertPerson(this.personService.personForm.value);
      this.personService.personForm.reset();
      console.log("Inserted");
    }
    else{
      this.personService.updatePerson(this.personService.personForm.value);
    }
  }

}
}

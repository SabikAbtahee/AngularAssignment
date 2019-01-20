import { PersonService } from './../service/person.service';
import { Component, OnInit, Input, ViewChild, ViewChildren, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { person } from '../interface/person.interface';
import { debug } from 'util';
import { EditPersonComponent } from '../edit-person/edit-person.component';
// import { type } from 'os';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit{
  
  


  @Input('formType') formType='create';
  @Output() updatePerson = new EventEmitter<string>();
  hasUnitNumber = false;

  country = [
    { name: 'Alabama', abbreviation: 'Alabama' },
    { name: 'Alaska', abbreviation: 'Alaska' },
    { name: 'American Samoa', abbreviation: 'American Samoa' },
    { name: 'Arizona', abbreviation: 'Arizona' },
    { name: 'Arkansas', abbreviation: 'Arkansas' },
    { name: 'California', abbreviation: 'California' },
    { name: 'Colorado', abbreviation: 'Colorado' },
    { name: 'Connecticut', abbreviation: 'Connecticut' },
    { name: 'Delaware', abbreviation: 'Delaware' },
    { name: 'District Of Columbia', abbreviation: 'District Of Columbia' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
  ];

  constructor(private personService:PersonService) {

    
  }
  ngOnInit(){
      this.personService.getPersonList();
  }

  onSubmit() {
    if (!this.personService.personForm.valid) {
      // alert("Please fill out the form");
      // insert into firebase if key is null else edit the value
    }
    else if(this.personService.personForm.valid){
      if(this.personService.personForm.get('$key').value==null){
        this.personService.insertPerson(this.personService.personForm.value);
      }
      else{
        this.updatePerson.emit(this.personService.personForm.value);
      }
      this.personService.personForm.reset();
      this.personService.goToViewPersonPage();
    }

  }

 

}

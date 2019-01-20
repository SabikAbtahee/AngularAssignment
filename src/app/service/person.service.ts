import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { person } from '../interface/person.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debug } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  personList:AngularFireList<any>;
  personCount;
  personForm: FormGroup;
  personInfo: person;
  maxDate;

  constructor(private fb: FormBuilder,private db:AngularFireDatabase,private router : Router,private activatedRoute: ActivatedRoute,) {
    
    this.setMaxDate();
    this.personForm = this.fb.group({
      $key:[null],
      firstName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      lastName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50)])],
      email: [null, Validators.compose([Validators.email, Validators.required, Validators.maxLength(50)])],
      country: [null, Validators.required],
      phoneNumber: [''],
      gender: ['Other', Validators.required],
      dob: [null, Validators.compose([Validators.required,Validators.max(this.maxDate)])],
    });
    
  }
  getPersonList(){
    this.personList=this.db.list('person');
    
    return this.personList.snapshotChanges();
  }
  insertPerson(person){
    this.personList.push(this.createPerson(person));
    this.getPersonCount();
    this.goToViewPersonPage();
  }
  setMaxDate() {
    let dmy = new Date();
    this.maxDate = new Date(dmy.getFullYear(), dmy.getMonth(), dmy.getDate());
    
  }
  populateForm(person){
    this.personForm.setValue(person);
    this.router.navigate([`person/edit`] , { relativeTo: this.activatedRoute.parent});
    
  }
  updatePerson(person){
      this.personList.update(person.$key,
        this.createPerson(person));
        this.getPersonCount();
        this.goToViewPersonPage();
  }
  deletePerson(personKey:string){
    this.personList.remove(personKey);
    this.getPersonCount();
    this.goToViewPersonPage();
  }
  getPersonCount(){
    this.personCount= this.db.list('person').snapshotChanges().subscribe(list => this.personCount = list);
  }
  goToViewPersonPage(){
    this.router.navigate([`person/view`] , { relativeTo: this.activatedRoute.parent});
  }
  createPerson(personInformation) {

    if(personInformation.dob==null){
      personInformation.dob=new Date();
    }
    this.personInfo = {
      
      firstName: personInformation.firstName,
      lastName: personInformation.lastName,
      email: personInformation.email,
      country: personInformation.country,
      gender: personInformation.gender,
      
      // dob:(personInformation.dob.getDate().toString()+'/'+(personInformation.dob.getMonth()+1).toString()+'/'+personInformation.dob.getFullYear().toString()),
      
      dob:(personInformation.dob.toISOString()),
      phoneNumber: personInformation.phoneNumber,
    }
    
    console.log(typeof(personInformation.dob));
    
    return this.personInfo;


  }
}

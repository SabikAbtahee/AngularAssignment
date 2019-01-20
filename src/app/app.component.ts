import { PersonService } from './service/person.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';
  constructor(private personService:PersonService){
    this.personService.getPersonCount();
  }
}

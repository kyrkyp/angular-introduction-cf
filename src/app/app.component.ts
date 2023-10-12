import { PersonComponent } from './person/person.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Kyriakos"
  lastname = "Kypraios"
  
  person: Person = {
  givenName: "Kyriakos",
  surName: "Kypraios",
  age: 32,
  email: "test@email.com",
  address: "Athens, Greece"
  }
}

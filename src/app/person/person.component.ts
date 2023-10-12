import { Person } from './../interfaces/person';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person: Person = {
    givenName: "Person's First Name",
    surName: "Person's Last Name",
    age: 0,
    email: "Person's Email",
    address: "Person's Address"
  };
}
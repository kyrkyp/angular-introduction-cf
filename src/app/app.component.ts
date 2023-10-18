import { OutputDemoComponent } from './output-demo/output-demo.component';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonAltComponent } from './person-alt/person-alt.component';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { EventBindComponent } from './event-bind/event-bind.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent, EventBindComponent, OutputDemoComponent, PersonCardComponent, TemplateDrivenFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = "Kyriakos"
  lastname = "Kypraios"
  
  person: Person = {
  givenName: "Kyriakos",
  surName: "Kypraios",
  age: 32,
  email: "test@email.com",
  address: "Athens, Greece"
  }
  
  users: Person[] = [];

  sentUser: Person | undefined

  constructor(private appService: AppService = Inject(AppService)) { }

  ngOnInit(): void {
      this.appService.getAllUsers().subscribe((users) => {
        this.users = users
        console.log(this.users)
      })
  }

  onDeleteUser(index: number) {
    this.users.splice(index, 1)
  }

  onSendUser(user: Person) {
    console.log(user)
    this.sentUser = user
  }

  onNewPerson(person: Person) {
    this.users.push(person)
  }
}

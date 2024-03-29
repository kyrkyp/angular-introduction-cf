import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  @Output() person = new EventEmitter<Person>();

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surnName: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(18), Validators.max(120)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    photoURL: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
    this.person.emit(this.form.value as Person);
    this.form.reset();
  }
}

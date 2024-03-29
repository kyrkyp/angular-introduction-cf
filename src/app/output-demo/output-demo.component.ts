import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-output-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-demo.component.html',
  styleUrls: ['./output-demo.component.css']
})
export class OutputDemoComponent {
  @Input() userData: Person[] = []
  @Output() sendUser = new EventEmitter<Person>()
  @Output() deleteUser = new EventEmitter<number>()

  onSendUser(user: Person) {
    this.sendUser.emit(user)
  }

  onDeleteUser(index: number) {
    this.deleteUser.emit(index)
  }
}

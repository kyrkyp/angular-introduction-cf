import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { Person } from 'src/app/interfaces/person';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, CrudUserFormComponent],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  @Output() userUpdated = new EventEmitter();
  foundUser: Person | undefined;

  constructor(private appService: AppService = Inject(AppService)) {}

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
    }
  }

  onUpdate(user: Person) {
    this.appService.updateUser(user).subscribe((user) => {
      this.userUpdated.emit(user);
    });
  }
}

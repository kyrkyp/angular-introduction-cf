import {
  Component,
  ElementRef,
  Inject,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css'],
})
export class CrudUserSearchComponent {
  foundUser: Person | undefined;

  @ViewChild('userId') userIdIninput!: ElementRef<HTMLInputElement>;
  @Output() userFound = new EventEmitter<Person | undefined>();

  constructor(private appService: AppService = Inject(AppService)) {}

  onSearch() {
    console.log(this.userIdIninput.nativeElement.value);

    const id = this.userIdIninput.nativeElement.value;
    this.appService.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        this.foundUser = user;
        this.userFound.emit(this.foundUser);
      },
      error: (error) => {
        console.log(error);
        this.userFound.emit(this.foundUser);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}

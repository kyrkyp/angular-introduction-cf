import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DangerAreYouSureComponent } from '../../utils/danger-are-you-sure/danger-are-you-sure.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [
    CommonModule,
    CrudUserSearchComponent,
    PersonCardComponent,
    DangerAreYouSureComponent,
  ],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();

  foundUser: Person | undefined;

  @ViewChild('userId') userIdIninput!: ElementRef<HTMLInputElement>;

  constructor(
    private appService: AppService = Inject(AppService),
    private http: HttpClient = Inject(HttpClient)
  ) {}

  onCLick() {
    const id = this.userIdIninput.nativeElement.value;
    // this.appService.deleteUserById(parseInt(id)).subscribe({
    //   next: (user) => {
    //     this.userDeleted.emit();
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('Completed');
    //   }
    // });
    this.http.delete<Person>('htttp://localhost:3000/users/' + id).subscribe({
      next: (user) => {
        this.userDeleted.emit();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
    }
  }

  onConfirm(iAmSure: boolean) {
    if (iAmSure && this.foundUser) {
      const id = this.foundUser.id ?? -1;
      this.appService.deleteUserById(id).subscribe({
        next: (user) => {
          this.userDeleted.emit();
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed');
        },
      });
    } else {
      console.log('No user found');
      this.foundUser = undefined;
    }
  }
}

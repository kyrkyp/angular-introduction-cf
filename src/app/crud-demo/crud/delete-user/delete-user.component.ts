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

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();

  foundUser: Person | undefined;

  @ViewChild('userId') userIdIninput!: ElementRef<HTMLInputElement>;

  constructor(
    // private appService: AppService = Inject(AppService)
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
}

import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule, PersonCardComponent],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements AfterViewInit {

  foundUser: Person | undefined;
 
  @ViewChild('userId') userIdIninput!: ElementRef<HTMLInputElement>;

  constructor(private appService: AppService = Inject(AppService)) { }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick() {
    console.log(this.userIdIninput.nativeElement.value);

    const id = this.userIdIninput.nativeElement.value;
    this.appService.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        this.foundUser = user;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }
}

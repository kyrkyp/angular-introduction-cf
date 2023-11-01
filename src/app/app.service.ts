import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient = Inject(HttpClient)) {}

  getAllUsers() {
    return this.http.get<Person[]>('htttp://localhost:3000/users');
  }

  addUser(user: Person) {
    return this.http.post<Person>('htttp://localhost:3000/users', user);
  }

  getUserById(id: number) {
    return this.http.get<Person>('htttp://localhost:3000/users/' + id);
  }

  deleteUserById(id: number) {
    return this.http.delete<Person>('htttp://localhost:3000/users/' + id);
  }

  updateUser(user: Person) {
    return this.http.put<Person>(
      'htttp://localhost:3000/users/' + user.id,
      user
    );
  }
}

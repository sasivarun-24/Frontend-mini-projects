import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from './user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private usersUrl = 'http://localhost:4200/users.json'; // Local JSON
  private usersUrl = 'http://localhost:8081/api/users'; // Backend API
  users: User[] = [];

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(data => this.users = data)
    );
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}


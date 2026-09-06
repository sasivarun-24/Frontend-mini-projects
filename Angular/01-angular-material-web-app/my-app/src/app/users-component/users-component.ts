import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For JsonPipe if needed, though usually standard in recent versions
import { RouterModule } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user-interface';

@Component({
  selector: 'app-users-component',
  imports: [RouterModule, CommonModule],
  templateUrl: './users-component.html',
  styleUrl: './users-component.scss',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  isLoading = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching users', err);
        this.isLoading = false;
      }
    });
  }
}


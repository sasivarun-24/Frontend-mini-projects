import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For generic pipes
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user-service';
import { User } from '../user-interface';

@Component({
    selector: 'app-material-users',
    standalone: true,
    imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
    templateUrl: './material-users.component.html',
    styleUrl: './material-users.component.scss'
})
export class MaterialUsersComponent implements OnInit {
    users: User[] = [];
    displayedColumns: string[] = ['name', 'actions']; // 'actions' column for buttons

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        // Assuming fetchUsers returns an Observable
        this.userService.fetchUsers().subscribe(data => {
            this.users = data;
        });
    }


}

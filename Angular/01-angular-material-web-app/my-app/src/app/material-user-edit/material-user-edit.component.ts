import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user-service';
import { User } from '../user-interface';

@Component({
    selector: 'app-material-user-edit',
    standalone: true,
    imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './material-user-edit.component.html',
    styleUrl: './material-user-edit.component.scss'
})
export class MaterialUserEditComponent implements OnInit {
    // Initialize with default to avoid strict null check issues in template
    user: User = {
        id: 0,
        name: '',
        email: '',
        telephone: '',
        address: { street: '', city: '', postalCode: '', country: '' }
    };

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            if (id) {
                const foundUser = this.userService.getUser(id);
                if (foundUser) {
                    this.user = foundUser;
                }
            }
        });
    }

    submit(form: any) {
        console.log('Saved:', this.user);
        // Add logic to save if Service supports it
    }
}

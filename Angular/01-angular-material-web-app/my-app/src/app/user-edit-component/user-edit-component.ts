import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user-interface';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit-component',
  imports: [FormsModule],
  templateUrl: './user-edit-component.html',
  styleUrl: './user-edit-component.scss',
})
export class UserEditComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        const id = parseInt(idString, 10);
        this.user = this.userService.getUser(id);
      }
    });
  }

  submit(form: any): void {
    console.log('Form submitted', form.value);
    // Future implementation: POST call to backend
  }
}

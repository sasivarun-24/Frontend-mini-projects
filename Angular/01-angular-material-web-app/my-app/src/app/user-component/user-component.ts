import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user-interface';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('userId');
      if (idString) {
        const id = parseInt(idString, 10);
        this.user = this.userService.getUser(id);
      }
    });
  }
}

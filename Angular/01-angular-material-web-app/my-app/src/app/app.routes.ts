import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { UsersComponent } from './users-component/users-component';
import { UserComponent } from './user-component/user-component';
import { UserEditComponent } from './user-edit-component/user-edit-component';
import { MaterialUsersComponent } from './material-users/material-users.component';
import { MaterialUserEditComponent } from './material-user-edit/material-user-edit.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { CounterComponent } from './counter-component/counter-component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:userId', component: UserComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'material-users', component: MaterialUsersComponent },
  { path: 'material-user-edit/:id', component: MaterialUserEditComponent },
  { path: 'login', component: LoginFormComponent }
];

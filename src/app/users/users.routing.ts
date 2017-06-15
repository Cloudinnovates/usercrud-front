import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {UserFormComponent} from "./user-form/user-form.component";

const usersRoutes: Routes = [
  { path: 'new', component: UserFormComponent},
  { path: ':id', component: UserFormComponent}
];

export const usersRouting = RouterModule.forChild(usersRoutes);

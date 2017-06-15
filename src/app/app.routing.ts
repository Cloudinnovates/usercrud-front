import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: UsersComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

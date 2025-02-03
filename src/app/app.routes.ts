import { Routes } from '@angular/router';
import { routes as authRoutes } from './auth/auth.routes';
import { routes as boardRoutes } from './boards/boards.routes';
import { BoardsComponent } from './boards/boards.component';
export const routes: Routes = [
  ...authRoutes,
  {
    path: 'boards',
    component: BoardsComponent,
    children: boardRoutes
  }
];

import { Routes } from "@angular/router";
import { BoardsComponent } from "./boards.component";
import { BoardsListComponent } from "./boards-list/boards-list.component";
import { BoardsCreateComponent } from "./boards-create/boards-create.component";
import { BoardsDetailedComponent } from "./boards-detailed/boards-detailed.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-boards',
    pathMatch: 'full'
  }, 
  {
    path: 'user-boards',
    component: BoardsListComponent
  },
  {
    path: 'create-new-board',
    component: BoardsCreateComponent
  },
  {
    path: 'board/:boardId',
    component: BoardsDetailedComponent
  }
]
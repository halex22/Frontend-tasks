import { Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { SingUpComponent } from "./sing-up/sing-up.component";

export const routes: Routes = [
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SingUpComponent
  }
]
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './boards.component.html',
  styles: ``
})
export class BoardsComponent implements OnInit {
  private authService = inject(AuthService)
  private router = inject(Router)
  

  ngOnInit(): void {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['log-in'], {replaceUrl: true})
    }
  }
}

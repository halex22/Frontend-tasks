import { Component, inject, OnInit } from '@angular/core';
import { DataFetcherService } from '../../services/data-fetcher.service';
import { MessageBoard } from '../../services/data.models';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [],
  templateUrl: './boards-list.component.html',
  styles: ``
})
export class BoardsListComponent implements OnInit {
  
  private dataService = inject(DataFetcherService)
  messageBoards: MessageBoard[] = []
  isLoading = false
  
  ngOnInit(): void {
    this.isLoading = true

    this.dataService.fetchBoards().subscribe({
      next: boards => this.messageBoards = boards,
      error: error => console.error(error.message),
      complete: () => this.isLoading = false
    })
  }
}

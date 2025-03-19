import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { DataFetcherService } from '../../services/data-fetcher.service';
import { MessageBoard } from '../../services/data.models';
import { BoardCardComponent } from '../board-card/board-card.component';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [BoardCardComponent],
  templateUrl: './boards-list.component.html',
  styles: ``
})
export class BoardsListComponent implements OnInit {
  
  private dataService = inject(DataFetcherService)
  messageBoards: MessageBoard[] = []
  isLoading = false
  private destroyRef = inject(DestroyRef)
  
  ngOnInit(): void {
    this.isLoading = true

    const subscription = this.dataService.fetchBoards().subscribe({
      next: boards => this.messageBoards = boards,
      error: error => console.error(error.message),
      complete: () => this.isLoading = false
    })

    this.destroyRef.onDestroy(() => subscription?.unsubscribe())
  }
}

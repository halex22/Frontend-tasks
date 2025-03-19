import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { DataFetcherService } from '../../services/data-fetcher.service';
import { Message } from '../../services/data.models';
import { MessagesComponent } from '../../messages/messages.component';
import { NewMessageComponent } from '../../messages/new-message/new-message.component';
 
@Component({
  selector: 'app-boards-detailed',
  standalone: true,
  imports: [MessagesComponent, NewMessageComponent],
  templateUrl: './boards-detailed.component.html',
  styles: ``
})
export class BoardsDetailedComponent implements OnInit {
  @Input({required:true}) boardId!: string
  private fetchService = inject(DataFetcherService)
  messages: Message[] = []
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    const subscription = this.fetchService.fetchDetailedBoardMessages(this.boardId)
    .subscribe({
      next: data => this.messages = data
    })

    this.destroyRef.onDestroy(() => subscription?.unsubscribe())
  }  
}

import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { DataFetcherService } from '../../services/data-fetcher.service';
import { Message } from '../../services/data.models';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms'
import { debounceTime } from 'rxjs';
import { MessagesComponent } from '../../messages/messages.component';
 
@Component({
  selector: 'app-boards-detailed',
  standalone: true,
  imports: [ReactiveFormsModule, MessagesComponent],
  templateUrl: './boards-detailed.component.html',
  styles: ``
})
export class BoardsDetailedComponent implements OnInit {
  @Input({required:true}) boardId!: string
  private fetchService = inject(DataFetcherService)
  messages: Message[] = []
  private destroyRef = inject(DestroyRef)
  private draftMessageKey = 'draftMessage'

  ngOnInit(): void {
    const subscription = this.fetchService.fetchDetailedBoardMessages(this.boardId)
    .subscribe({
      next: data => this.messages = data
    })

    const subscribeTwo = this.messageForm.valueChanges
    .pipe(debounceTime(1000))
    .subscribe({
      next: formData => {
        const { message } = formData
        if (message) this.saveDraftMessage(message) 
      }
    })
    this.destroyRef.onDestroy(() => subscription?.unsubscribe())
  }

  messageForm = new FormGroup({
    message: new FormControl(this.loadDraftMessage(), {
      validators: [Validators.required]
    })
  })

  saveDraftMessage(messageText: string): void {
    localStorage.setItem(this.draftMessageKey, messageText)
  }

  loadDraftMessage():string {
    const draftMessage = localStorage.getItem(this.draftMessageKey)
    return draftMessage ?? ''
  }
 


  
}

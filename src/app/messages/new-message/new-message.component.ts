import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'div[new-msg-form]',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-message.component.html',
  styles: ``
})
export class NewMessageComponent implements OnInit{
  private draftMessageKey = 'draftMessage'
  private destroyRef = inject(DestroyRef)

  
  ngOnInit():void {
    const subscription = this.messageForm.valueChanges
    .pipe(debounceTime(1000))
    .subscribe({
      next: formData => {
        const {message} = formData
        console.log(message, 'trying to save')
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

  createMessage():void {
    console.log(this.messageForm)
  }

  loadDraftMessage():string {
    const draftMessage = localStorage.getItem(this.draftMessageKey)
    return draftMessage ?? ''
  }

  saveDraftMessage(messageText: string): void {
    localStorage.setItem(this.draftMessageKey, messageText)
  }
}

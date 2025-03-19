import { Component, Input } from '@angular/core';

@Component({
  selector: 'li[msg-item]',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styles: ``
})
export class MessagesComponent {
  @Input({required: true}) msgText!: string
}

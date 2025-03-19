import { Component, inject, Input } from '@angular/core';
import { MessageBoard } from '../../services/data.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'li[boardCard]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './board-card.component.html',
  styles: ``
})
export class BoardCardComponent {
  @Input({required:true}) board!: MessageBoard

}

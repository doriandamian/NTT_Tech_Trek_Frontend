import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  @Input({ required: true }) authors!: string[];
  @Output() selectedAuthor = new EventEmitter<string>();

  authorSelect = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.authorSelect = this.authors[0];
    this.selectedAuthor.emit(this.authorSelect);
  }

  changeSelectedAuthor(event: Event) {
    this.selectedAuthor.emit(this.authorSelect);
  }
}

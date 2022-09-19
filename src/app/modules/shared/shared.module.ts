import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchTermComponent } from './components/search-term/search-term.component';

@NgModule({
  declarations: [SearchTermComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchTermComponent],
})
export class SharedModule {}

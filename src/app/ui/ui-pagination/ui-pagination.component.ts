import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.css']
})
export class UiPaginationComponent {
  @Input() totalPages: number[] = [];
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.pageChange.emit(page);
    }
  }
}

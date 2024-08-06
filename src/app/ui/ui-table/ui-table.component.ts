import { Component, Input, OnInit } from '@angular/core';
import { faPenToSquare, faTrash, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimeService } from 'src/app/services/anime.services';

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.css']
})
export class UiTableComponent implements OnInit {
  items!: any[];
  @Input()
  table_type!: string
  @Input()
  displayedColumns!: { [key: string]: boolean; };
  @Input()
  rows!: { [key: string]: string; };
  editIcon = faPenToSquare;
  deleteIcon = faTrash;
  paginatedItems: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number[] = [];
  totalItems: number = 0

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.fetchData();
  }

  fetchData() {
    this.setPage(this.currentPage);
  }

  updatePagination() {
    this.totalPages = Array(Math.ceil(this.totalItems / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.animeService.getAll(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.items = response.data;
      this.totalItems = response.total;
      this.updatePagination();
    });
  }

  onPageChange(page: number) {
    this.setPage(page);
  }

  objectKeys = Object.keys;

  getValue(item: any, key: string): any {
    return item[key];
  }

  deleteItem(item: any): void {
    this.animeService.remove(item.aid).subscribe((response) => { this.fetchData() })
  }
}

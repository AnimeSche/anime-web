import { Component, Input } from '@angular/core';
import { faPenToSquare, faTrash, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimeService } from "../../services/anime.services";
import { AnimateTimings } from '@angular/animations';
import { Tools } from 'src/app/tools';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Anime {
  title_en: string;
  title_jp: string;
  title_original: string;
  rating: number;
  release_date: string;
  country: string;
  episodes: number;
  url: string;
  image: string;
  description: string;
  tags: string[];
  id: string;
  aid: number;
}

interface Rows {
  title_en?: string;
  title_jp?: string;
  title_original?: string;
  rating?: string;
  release_date?: string;
  country?: string;
  episodes?: string;
  url?: string;
  image?: string;
  description?: string;
  tags?: string;
  id?: string;
  aid?: string;
}

export const preview_data: Anime[] = [
  {
    title_en: 'string',
    title_jp: 'string',
    title_original: 'string',
    rating: 5,
    release_date: '2024-03-08',
    country: 'JP',
    episodes: 12,
    url: 'Test',
    image: '',
    description: '',
    tags: [''],
    id: '',
    aid: 0
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private animeService: AnimeService, private fb: FormBuilder) {
    this.newItemForm = this.fb.group({
      title_en: [''],
      title_original: [''],
      title_jp: [''],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      release_date: ['', Validators.required],
      country: [''],
      episodes: [0, [Validators.required, Validators.min(1)]],
      url: [''],
      image: [''],
      description: [''],
      tags: this.fb.array([])
    });
    this.newUrlForm = this.fb.group({
      url: ['']
    })
  }

  displayedColumns: { [key: string]: boolean } = {
    'title_en': true,
    'title_jp': true,
    'title_original': true,
    'rating': true,
    'release_date': true,
    'country': true,
    'episodes': true,
    'url': true,
    'image': true,
    'description': true,
    'tags': true
  };

  ngOnInit() {
    this.fetch()
  }

  get tags(): FormArray {
    return this.newItemForm.get('tags') as FormArray;
  }

  addTag(tag: string): void {
    this.tags.push(this.fb.control(tag));
  }

  fetch() {
    this.animeService.getAll(1, 10).subscribe((response: any) => {
      this.originalItems = response.data || [];
    })
  }

  @Input({ required: false }) items!: Anime[];

  editIcon = faPenToSquare;
  deleteIcon = faTrash;
  closeModelIcon = faCircleXmark;

  // Для редагування
  showModal: boolean = false;
  showAddModal: boolean = false;
  showInsertModal: boolean = false;
  showColumnSettings: boolean = false;
  currentItem: Anime | any = null;
  originalItem: Anime | any = null; // Зберігаємо оригінальне значення для порівняння
  originalItems: Anime[] = []
  row: Rows = {
    title_en: 'Title En',
    title_original: 'Main Title',
    rating: 'Rating', tags: 'Tags', release_date: 'Release Date', episodes: 'Episodes', description: 'Description',
    title_jp: 'Title Jp', country: 'Country', url: 'Website Irl'
  }
  rows: string[] = Object.keys(this.row)

  newItemForm: FormGroup;
  newUrlForm: FormGroup;

  // Для модального вікна з зображенням
  showImageModal: boolean = false;
  currentImage: string = '';

  openModal(item: Anime) {
    this.currentItem = { ...item }; // Копіюємо дані до модального вікна
    this.originalItem = { ...item }; // Зберігаємо оригінальне значення
    this.showModal = true;
  }

  getValue(object: any, key: string) {
    return Tools.getProperty(object, key)
  }

  closeModal() {
    this.showModal = false;
  }

  toggleColumnSettings() {
    this.showColumnSettings = !this.showColumnSettings;
  }

  saveItem() {
    this.currentItem.tags = this.currentItem.tags.split(',');
    this.animeService.patch(this.currentItem.aid, this.currentItem).subscribe((response: any) => { this.fetch(); this.closeModal(); })
    // Логіка для збереження змін
  }

  openImageModal(image: string) {
    this.currentImage = image; // Зберігаємо зображення
    this.showImageModal = true; // Відкриваємо модальне вікно з зображенням
  }

  closeImageModal() {
    this.showImageModal = false; // Закриваємо модальне вікно з зображенням
  }

  addItem() {
    if (this.newItemForm.valid) {
      this.items.push(this.newItemForm.value);
      this.closeAddModal();
      this.newItemForm.reset({
        title: { en: '', jp: '', original: '' },
        rating: 0,
        release_date: '',
        country: '',
        episodes: 0,
        url: '',
        image: '',
        description: '',
        tags: []
      });
    }
  }

  addAnimeFromUrl() {
    if (this.newUrlForm.valid) {
      this.closeUrlModal();
    }
  }

  // Функція для отримання ключів об'єкта
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  deleteItem(item: Anime) {
    // Логіка для видалення запису
  }

  openAddModal() {
    this.showAddModal = true;
  }

  openUrlModal() {
    this.showInsertModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }
  closeUrlModal() {
    this.showInsertModal = false;
  }
}

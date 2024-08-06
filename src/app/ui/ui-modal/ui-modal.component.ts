import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AnimeService } from "../../services/anime.services";
import { AnimeFeatch } from 'src/app/tools';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.services';

export interface AnimeEpisodes {
  episode: string;
  duration: string;
  title: { [key: string]: any };
  aid: number;
  title_str: string;
}

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent implements OnInit {
  rows!: { [key: string]: string; };
  activeModal: string | null = null;
  currentItem: any = null;
  currentImage: string | null = null;
  calendarDays: Date[] = [];

  newItemForm: FormGroup;
  newUrlForm: FormGroup;
  bookmarkForm: FormGroup;
  episodes: any[] = [];

  closeModalIcon = faTimes;

  constructor(private fb: FormBuilder, private animeService: AnimeService, private userService: UserService) {
    this.newItemForm = this.fb.group({
      title_original: [''],
      title_en: [''],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      tags: this.fb.array([]),
      release_date: ['', Validators.required],
      episodes: [0, [Validators.required, Validators.min(1)]]
    });

    this.newUrlForm = this.fb.group({
      url: ['', Validators.required]
    });
    this.bookmarkForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initializeCalendarDays()
    if (this.activeModal == 'image') {
      this.loadEpisodes()
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  }

  initializeCalendarDays() {
    const today = new Date();
    for (let i = -3; i <= 3; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.calendarDays.push(date);
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  openModal(modalName: string, item: any, image: string) {
    this.activeModal = modalName;
    switch (modalName) {
      case 'image':
        this.currentImage = image
        this.currentItem = item;
        break;
      case 'add':
        this.rows = item
        break;
      case 'url':
        this.rows = item
        break;
      case 'bookmark':
        this.rows = { 'title': 'Title' }
        if (item) {
          this.currentItem = item
        }
        break;
      default:
        this.currentItem = item
        break;
    }
  }

  closeModal() {
    this.activeModal = null;
    this.currentItem = null;
  }

  closeImageModal() {
    this.activeModal = null;
    this.currentImage = null;
  }

  closeAddModal() {
    this.activeModal = null;
  }

  closeUrlModal() {
    this.activeModal = null;
  }

  saveItem() {
    // Логіка збереження item
    this.closeModal();
  }

  addItem() {
    if (this.newItemForm.valid) {
      this.animeService.add(this.newItemForm.value).subscribe((response) => {
        this.closeAddModal();
      });
    } else {
      // Handle form validation errors here
    }
  }

  addUrlItem() {
    this.animeService.addFromUrl(this.newUrlForm.value).subscribe((res) => {
      this.closeUrlModal()
    })
  }
  addBookmarkItem() {
    const data = new FormData()
    data.append('title', this.bookmarkForm.get('title')?.value)
    this.userService.addAnime(data).subscribe((res) => {
      this.closeModal()
    })
  }

  addBookmarkWithItem() {
    const data = new FormData()
    data.append('title', this.bookmarkForm.get('title')?.value)
    data.append('anime_id', this.currentItem.aid)
    this.userService.addAnime(data).subscribe((res) => {
      this.closeModal()
    })
  }

  loadEpisodes() {
    this.animeService.getEpisodes(this.currentItem.aid).subscribe((response: AnimeEpisodes[]) => {
      this.episodes = response;
    });
  }

  objectKeys = Object.keys;
}

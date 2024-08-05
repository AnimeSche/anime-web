import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AnimeService } from "../../services/anime.services";
import { AnimeFeatch } from 'src/app/tools';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent {
  rows!: { [key: string]: string; };
  activeModal: string | null = null;
  currentItem: any = null;
  currentImage: string | null = null;

  newItemForm: FormGroup;
  newUrlForm: FormGroup;
  episodes: any[] = [];

  closeModalIcon = faTimes;

  constructor(private fb: FormBuilder, private animeService: AnimeService) {
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

  loadEpisodes() {
    this.animeService.getEpisodes(this.currentItem.aid).subscribe((response: any) => {
      this.episodes = response;
    });
  }

  objectKeys = Object.keys;
}

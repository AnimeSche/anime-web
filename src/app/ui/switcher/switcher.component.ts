// switcher.component.ts
import { Component, OnInit } from '@angular/core';
import { faList, faEyeSlash, faEye, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faLinesLeaning, faWandMagicSparkles, faPenRuler, faShare, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { preview_data } from "../table/table.component";
import { AnimeService } from "../../services/anime.services";

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent {
  currentComponent: string = 'table1';
  allIcon = faLinesLeaning;
  watched = faEyeSlash;

  watching = faEye;
  write = faPenRuler;
  url = faShare;
  upload = faCloudArrowDown;
  totalItems!: number

  bookmark = faWandMagicSparkles;

  objectKeys = Object.keys;

  data: any[] = [];
  showColumnSettings: boolean = false;
  displayedColumns: { [key: string]: boolean } = {
    'title_en': true,
    'title_ru_ua': true,
    'title_original': true,
    'rating': true,
    'release_date': true,
    'country': false,
    'episodes': true,
    'url': false,
    'image': false,
    'description': false,
    'tags': true
  };
  row: { [key: string]: string } = {
    title_en: 'Title En',
    title_ru_ua: 'Title Ru / UA',
    rating: 'Rating', tags: 'Tags', release_date: 'Release Date', episodes: 'Episodes', description: 'Description',
    title_jp: 'Title Jp', country: 'Country', url: 'Website Irl'
  }

  constructor(private animeService: AnimeService) { }

  fetch() {
    this.animeService.getAll(1, 10).subscribe((response: any) => {
      this.data = response.data || [];
      this.totalItems = response.total;
    })
  }


  onClick(currentComponent: string) {
    this.currentComponent = currentComponent;
  }

  uploadSeson() {
    this.animeService.uploadSeason().subscribe((response) => { })
  }

  toggleColumnSettings() {
    this.showColumnSettings = !this.showColumnSettings;
  }
}

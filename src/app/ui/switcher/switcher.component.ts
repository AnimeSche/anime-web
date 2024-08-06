// switcher.component.ts
import { Component, OnInit } from '@angular/core';
import { faList, faEyeSlash, faEye, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faLinesLeaning, faWandMagicSparkles, faPenRuler, faShare, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { preview_data } from "../table/table.component";
import { AnimeService } from "../../services/anime.services";
import { ToastrService } from 'ngx-toastr';
import { UserBookmarks, UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {
  [x: string]: any;
  currentComponent: string = 'table1';
  allIcon = faLinesLeaning;
  watched = faEyeSlash;

  watching = faEye;
  write = faPenRuler;
  url = faShare;
  upload = faCloudArrowDown;
  totalItems!: number
  userBookmarks: UserBookmarks[] = []

  bookmark = faWandMagicSparkles;

  objectKeys = Object.keys;

  data: any[] = [];
  showColumnSettings: boolean = false;
  displayedColumns: { [key: string]: boolean } = {}
  row: { [key: string]: string } = {
    title_en: 'Title En',
    title_ru_ua: 'Title Ru / UA',
    rating: 'Rating', tags: 'Tags', release_date: 'Release Date', episodes: 'Episodes', description: 'Description',
    title_jp: 'Title Jp', country: 'Country', url: 'Website Irl'
  }

  constructor(private animeService: AnimeService, private toastr: ToastrService, private user: UserService) { }

  fetch() {
    this.user.getAll().subscribe((data) => {
      this.userBookmarks = data
    })
  }

  ngOnInit(): void {
    this.displayedColumns = {
      'title_en': true,
      'title_ru_ua': true,
      'title_original': false,
      'rating': true,
      'release_date': true,
      'country': false,
      'episodes': true,
      'url': false,
      'image': false,
      'description': false,
      'tags': true
    };
    this.fetch()
  }


  onClick(currentComponent: string) {
    this.currentComponent = currentComponent;
    if (currentComponent != 'all') {
      this.user.getByTitle(currentComponent).subscribe((resp: any) => {
        this.data = resp
      })
    }

  }

  uploadSeason() {
    this.animeService.uploadSeason().subscribe(
      (response: any) => {
        // Handle successful response
        this.toastr.success(response.message)
      },
      (error) => {
        if (error.status === 400) {
          // Handle status code 400 (Bad Request)
          this.toastr.error(error.message, 'Upload Season', { enableHtml: true });
        } else {
          // Handle other errors
          this.toastr.error(error.message, 'Upload Season', { enableHtml: true });
        }
      }
    );
  }


  toggleColumnSettings() {
    this.showColumnSettings = !this.showColumnSettings;
  }
}

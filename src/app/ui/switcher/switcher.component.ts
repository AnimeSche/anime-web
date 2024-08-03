// switcher.component.ts
import { Component, OnInit } from '@angular/core';
import { faList, faEyeSlash, faEye, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { preview_data } from "../table/table.component";
import { AnimeService } from "../../services/anime.services";

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {
  currentComponent: string = 'table1';
  allIcon = faList;
  watched = faEyeSlash;

  watching = faEye;

  bookmark = faBookmark;

  data: any[] = [];

  constructor(private animeService: AnimeService) { }
  ngOnInit() {
    this.fetch()
  }

  fetch() {
    this.animeService.getAll(1, 10).subscribe((response: any) => {
      this.data = response.data || [];
    })
  }
}

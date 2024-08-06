import { Component } from '@angular/core';
import { preview_data } from "../../ui/table/table.component";
import { faTable, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }
  anime_list_icon = faTable;
  calendar_icon = faCalendar;
  preview = preview_data;

  goToAnimeList() {
    this.router.navigate(['/anime-list']);
  }

  goToCalendar() {
    this.router.navigateByUrl('/home/calendar');
  }

}

import { Component } from '@angular/core';
import { faTable, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anime Scheduler';
  anime_list_icon = faTable;
  calendar_icon = faCalendar;
}

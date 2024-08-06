import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.services';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  episodes: any[] = [];
  calendarDays: Date[] = [];

  constructor(private animeService: AnimeService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.generateCalendar();
    this.loadEpisodes();
  }

  generateCalendar() {
    const start = new Date(); // Change to the start of the current season
    const end = new Date(); // Change to the end of the current season

    while (start <= end) {
      this.calendarDays.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }
  }

  loadEpisodes() {
    this.animeService.getAll(1, 10).subscribe((response: any) => {
      this.episodes = response.data;
    });
  }

  episodesForDay(day: Date): any[] {
    return this.episodes.filter(episode => new Date(episode.air_date).toDateString() === day.toDateString());
  }

  isToday(day: Date): boolean {
    const today = new Date();
    return day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear();
  }
}

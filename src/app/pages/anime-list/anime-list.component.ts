import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  constructor(private router: Router,
    private route: ActivatedRoute) { }

}

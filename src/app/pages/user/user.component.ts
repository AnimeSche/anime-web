// user.component.ts
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.user = this.sessionService.isLoggedIn();
  }

  setPage() {
    this.sessionService.setCurrentPage('profile')
  }
}

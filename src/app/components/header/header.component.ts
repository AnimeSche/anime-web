import { Component, OnInit } from '@angular/core';
import {
  faArrowAltCircleRight, faHouse, faFolder, faFolderOpen,
  faRightToBracket, faAddressCard, faArchway
} from "@fortawesome/free-solid-svg-icons";
import { settings } from "../../../environments/environments";
import { SessionService } from 'src/app/services/session.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  uploadIcon = faArrowAltCircleRight;
  homeIcon = faArchway;
  isOpenFolder = false;
  closedIcon = faFolder;
  openIcon = faFolderOpen;
  isLoggedIn = this.session.isLoggedIn().active;
  logoutIcon = faRightToBracket;
  profileIcon = faAddressCard;
  page = this.session.getCurrentPage()
  currentRoute: string = '';

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url.split('/')[1];
      });
  }


  currentPage() {
    if (this.currentRoute != 'home') {
      return true
    } else {
      return false
    }
  }

  isActive() {
    return this.session.isLoggedIn().active
  }

  navigate(route: string) {
    this.session.setCurrentPage(route)
    this.router.navigate([`/${route}`]).finally(() => { });

  }
}

import { Component } from '@angular/core';
import {faArrowAltCircleRight, faHouse, faFolder, faFolderOpen,
  faRightToBracket, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {settings} from "../../../environments/environments";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  uploadIcon = faArrowAltCircleRight;
  homeIcon = faHouse;
  isOpenFolder = false;
  closedIcon = faFolder;
  openIcon = faFolderOpen;
  isLoggedIn = settings.isLoggedIn;
  logoutIcon = faRightToBracket;
  profileIcon = faAddressCard;
}

import { Component } from '@angular/core';
import {preview_data} from "../../ui/table/table.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  preview = preview_data;

}

import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../Models/Hotel.model";

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss']
})
export class ListHotelsComponent implements OnInit {

  @Input()
  public hotels: Array<Hotel>

  constructor() { }

  ngOnInit() {
  }

}

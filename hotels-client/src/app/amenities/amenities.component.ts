import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit, OnChanges {

  @Input()
  public Amenities: Array<string> = []

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }


}

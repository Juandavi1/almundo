import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit , OnChanges {

  @Input()
  public numberStart: number = 0

  public stars: Array<number> = []

  ngOnChanges(){
    this.stars = []
    for(let i=0; i<this.numberStart; i++){
      this.stars.push(i)
    }
  }

  ngOnInit() {

  }

}

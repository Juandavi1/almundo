import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HotelsService} from "../Services/Hotels.service";
import {Hotel} from "../Models/Hotel.model";
import {NgProgress} from "ngx-progressbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('menuFilter')
  private menu: ElementRef

  public AllHotels:Array<Hotel> = []

  constructor(
    private hotels: HotelsService,
    private rederer: Renderer2,
    public ngProgress: NgProgress
  ){}

  ngOnInit(){
    this.ngProgress.start();
    this.hotels.all().subscribe(data=> {
      this.AllHotels = data
      this.ngProgress.done()
    })
  }

  @HostListener('window:resize' , ['$event'])
  resize($event): void{
    this.toggleMenuFilter(this.menu.nativeElement)
  }

  public searchHotel(text: string): void{
    this.ngProgress.start();
    this.hotels.findHotels(text).subscribe(data => {
      this.AllHotels = data
      this.ngProgress.done()
    });
  }

  public findByStars(stars: number): void{
    this.toggleMenuFilter(this.menu.nativeElement)
    this.ngProgress.start()
    this.hotels.findByStars(stars).subscribe( data => {
      this.AllHotels = data
      this.ngProgress.done()
    })
  }

  public toggleMenuFilter(menuFilter): void{
    if(self.innerWidth>= 1024){
      this.rederer.removeClass(menuFilter,'showed')
      return
    }

    if(menuFilter.classList.contains('showed'))
      this.rederer.removeClass(menuFilter,'showed')
    else
      this.rederer.addClass(menuFilter , 'showed')

  }
}

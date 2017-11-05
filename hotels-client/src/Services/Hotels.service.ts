import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {IHotels} from "../Interfaces/Hotels.interface";
import {Observable} from "rxjs/Observable";
import {Hotel} from "../Models/Hotel.model";
import 'rxjs/add/operator/map';
import {HotelBuilder} from "../Builder/Hotel.model.Builder";

@Injectable()
export class HotelsService implements IHotels {

  constructor(private http: Http) {
  }

  public all(): Observable<Array<Hotel>> {
    return this.http.get('http://localhost:7777/Hotels')
      .map(this.mapAllHotels)
  }

  public findHotels(filter: string): Observable<Array<Hotel>> {
    return this.http.get(`http://localhost:7777/Hotels/find?search=${filter}`)
      .map(this.mapAllHotels)
  }

  public findByStars(stars: number): Observable<Array<Hotel>> {
    return this.http.get(`http://localhost:7777/Hotels/findByStars?stars=${stars}`)
      .map(this.mapAllHotels)
  }

  private mapAllHotels(resp): Array<Hotel> {
    const hotels: Array<Hotel> = []
    resp.json().forEach(hotel => hotels.push(new HotelBuilder().BuildFromObject(hotel).Build()))
    return hotels
  }
}

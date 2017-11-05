import {Observable} from "rxjs/Observable";
import {Hotel} from "../Models/Hotel.model";

export interface IHotels{
    all(): Observable<Array<Hotel>>
    findHotels(filter: string):Observable<Array<Hotel>>
    findByStars(stars: number):Observable<Array<Hotel>>
}
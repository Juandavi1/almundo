import { Component } from '@nestjs/common';
import {Observable} from "rxjs/Observable";
import {data} from "../../data";
import {IHotels} from "../../Interfaces/Hotels.interface";
import {Hotel} from "../../Models/Hotel.model";

@Component()
export class HotelsService implements IHotels{

    public all(): Observable<Array<Hotel>> {
        return Observable.of(data);
    }

    public findHotels(filter: string):Observable<Array<Hotel>>  {
        return Observable.of(data.filter(hotel => (
            hotel.name.toLowerCase().includes(filter.toLowerCase())
        )));
    }

    public findByStars(stars: number):Observable<Array<Hotel>>{
        return stars ? Observable.of(data.filter(hotel => hotel.stars===stars)) : Observable.of(data)
    }
}
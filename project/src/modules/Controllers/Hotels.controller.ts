import {Controller, Get, Inject, Post, Query} from '@nestjs/common';
import {Observable} from "rxjs/Observable";
import {HotelsService} from "../Services/Hotels.service";
import {IHotels} from "../../Interfaces/Hotels.interface";
import {Hotel} from "../../Models/Hotel.model";

@Controller('Hotels')
export class HotelsController {

    constructor(@Inject('HotelsService')
                private readonly hotels: IHotels) {
    }

    @Get()
    @Post()
    protected getAll(): Observable<Array<Hotel>> {
        return this.hotels.all()
    }

    @Get('find')
    @Post()
    protected findHotels(@Query('search') filter: string): Observable<Array<Hotel>> {
        return this.hotels.findHotels(filter)
    }

    @Get('findByStars')
    @Post()
    protected findByStars(@Query('stars') stars: number): Observable<Array<Hotel>> {
        return this.hotels.findByStars(typeof stars === 'string' ? parseInt(stars) : stars)
    }
}
import {Hotel} from "../Models/Hotel.model";

export class HotelBuilder{

  protected id: string = '-1';
  protected name: string = 'unknow';
  protected stars: number = 3;
  protected price: number = 0;
  protected image: string = 'http://lorempixel.com/200/200/';
  protected amenities: Array<string> = [];

  public Build(): Hotel{

    const hotel: Hotel = new Hotel()
    hotel.stars = this.stars
    hotel.name = this.name
    hotel.id = this.id
    hotel.price = this.price
    hotel.image = this.image
    hotel.amenities = this.amenities

    return hotel
  }

  public BuildFromObject(obj: Hotel): HotelBuilder{

    if(obj.amenities.length)
      this.amenities = obj.amenities

    if(obj.stars)
      this.stars = obj.stars

    if(obj.name)
      this.name = obj.name

    if(obj.id)
      this.id = obj.id

    if(obj.image)
      this.image = obj.image

    if(obj.price)
      this.price = obj.price

    return this
  }

}

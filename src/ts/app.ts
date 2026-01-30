import {type IProduct, type IFilm} from './../interface/IApp.js'

class Product implements IProduct{
  productName: string;
  releaseYear: number;
  genre: string[];

    constructor(
        productName: string,
        releaseYear: number,
        genre: string[],
    ){
        this.productName = productName;
        this.releaseYear = releaseYear;
        this.genre = genre;
    }
}

class Film extends Product implements IFilm{
    duration: number;
    slogan: string;

    constructor(
        duration: number, 
        slogan: string,
        productName: string,
        releaseYear: number,
        genre: string[],
    ){
        super(productName, releaseYear, genre); 
        this.duration = duration;
        this.slogan = slogan;
    }
        getInfo(): Object {
        return {
            duration: this.duration,
            slogan: this.slogan,
            productName: this.productName,
            releaseYear: this.releaseYear,
            genre: this.genre
        };
    }
}

module.exports = { Film };


const film = new Film(123, 'slogan', 'productName', 2023, ['action', 'drama']);
console.log(film.getInfo());
export interface IProduct{
    productName: string, 
    releaseYear: number,
    genre: string[],
}

export interface IFilm extends IProduct{
    duration: number;
    slogan: string;
}

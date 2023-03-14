import Buyable from './Buyable';

type GenreArr = 'fantastic' | 'fantasy' | 'action' | 'adventure' | 'crime' | 'comedy';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: GenreArr[],
    readonly runningTime: number,
    readonly price: number,
) { }
}
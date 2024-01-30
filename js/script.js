//4
import { movies } from "./db.js";
import { numbers } from "./ui.js";

let promo__interactive_ul = document.querySelector('.promo__interactive-list')

let genres = ['Все', ...new Set(movies.map(item => item.Genre))]
console.log(genres);

numbers(movies, promo__interactive_ul, genres)

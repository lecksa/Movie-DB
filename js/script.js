//4
import { movies } from "./db.js";
import { numbers } from "./ui.js";
import {reload_genres} from "./ui.js"

let promo__interactive_ul = document.querySelector('.promo__interactive-list')
let ul_menu = document.querySelector('.promo__menu-list ul')
let search_inp = document.querySelector('#search')

let genres = ['Все', ...new Set(movies.map(item => item.Genre))]

search_inp.onkeyup = (e) => {
    let key_word = e.target.value.trim().toLowerCase()

    let finded = movies.filter(item => {
        let title = item.Title.toLocaleLowerCase()

        if(title.includes(key_word)){
            return item
        }
    })
    numbers(finded, promo__interactive_ul)
}

reload_genres(genres, ul_menu, promo__interactive_ul)

numbers(movies, promo__interactive_ul)
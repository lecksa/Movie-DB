import { movies } from "./db.js"

// function setMovie(item) {
//     let genre = document.querySelector('.promo__genre')
//     const rating = document.querySelector('.IMDb')
//     const rating_2 = document.querySelector('.kino')
//     const plot = document.querySelector('.promo__descr')
//     const title = document.querySelector('.promo__title')
//     const bg = document.querySelector('.promo__bg')

//     bg.style.background = `url(${item.Poster}) center center/cover no-repeat`
//     rating.innerHTML = 'IMDb:' + ' ' + `${item.imdbRating}`
//     rating_2.innerHTML = 'Кинопоиск:' + ' ' + `${item.Kinopoisk}`
//     plot.innerHTML = `${item.Plot}`
//     genre.innerHTML = `${item.Genre}`
//     title.innerHTML = `${item.Title}`
// }

export function numbers(arr, place) {
    //1
    let imgs = document.querySelectorAll('.promo__adv img')
    imgs.forEach(img => { img.remove() })

    //2
    let genre = document.querySelector('.promo__genre')
    genre.innerHTML = 'Драма'

    //3
    let bg = document.querySelector('.promo__bg')
    bg.style.backgroundImage = `url(./img/bg.jpg)`

    place.innerHTML = ''

    setMovie(arr[0])

    for (let item of arr) {
        let idx = arr.indexOf(item) + 1

        //a
        let promo__interactive_li = document.createElement('li')
        let div_delete = document.createElement('div')

        //b
        promo__interactive_li.classList.add('promo__interactive-item')
        div_delete.classList.add('delete')
        promo__interactive_li.innerHTML = idx + ')' + item.Title

        //c
        place.append(promo__interactive_li)
        promo__interactive_li.append(div_delete)

        div_delete.onclick = () => {
            arr.splice(idx - 1, 1)
            numbers(arr, place)
        }

        promo__interactive_li.onclick = () => {
            setMovie(item)
        }
    }
}

// export function reload_genres(arr, place, sc_place) {
//     place.innerHTML = ''

//     for (let item of arr) {
//         let idx = arr.indexOf(item)

//         //a
//         let li = document.createElement('li')
//         let a = document.createElement('a')
//         //b
//         if (idx === 0) a.classList.add('promo__menu-item_active')

//         a.classList.add('promo__menu-item')
//         a.href = '#'
//         a.innerHTML = item
//         //c

//         place.append(li)
//         li.append(a)

//         li.onclick = () => {
//             const previousElem = place.querySelector('.promo__menu-item_active')
//             previousElem.classList.remove('promo__menu-item_active')

//             a.classList.add('promo__menu-item_active')

//             if (item === 'Все') {
//                 numbers(movies, sc_place)
//                 return
//             }

//             let filtered = movies.filter(movie => movie.Genre === item)

//             numbers(filtered, sc_place)
//         }
//     }
// }

export function numbers(arr, place, janri) {
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

    for (let item of arr) {
        let idx = arr.indexOf(item) + 1
        console.log(idx, item);

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
            numbers(arr, place, janri)
        }

        const rating = document.querySelector('.IMDb')
        const rating_2 = document.querySelector('.kino')
        const plot = document.querySelector('.promo__descr')
        const title = document.querySelector('.promo__title')
        const bg = document.querySelector('.promo__bg')

        promo__interactive_li.onclick = () => {

            bg.style.background = `url(${item.Poster}) center center/cover no-repeat`
            rating.innerHTML = 'IMDb:' + ' ' + `${item.imdbRating}`
            rating_2.innerHTML = 'Кинопоиск:' + ' ' + `${item.Kinopoisk}`
            plot.innerHTML = `${item.Plot}`
            genre.innerHTML = `${item.Genre}`
            title.innerHTML = `${item.Title}`
        }

        // movie(janri)
        
        let ul_menu = document.querySelector('.promo__menu-list ul')

        // function movie(janrimov) {

            ul_menu.innerHTML = ''

            for (let janr of janri) {
                //a
                let li = document.createElement('li')
                let link = document.createElement('a')

                //b
                link.classList.add('promo__menu-item')
                link.innerHTML = janr
                // link[0].classList.add('promo__menu-item_active')

                //c
                li.append(link)
                ul_menu.append(li)

                li.onclick = () => {
                    link.classList.add('promo__menu-item_active')

                    if (janr !== item.Genre) {
                        promo__interactive_li = item.Title
                        promo__interactive_li.innerHTML = ''
                    } else {
                        promo__interactive_li.innerHTML = idx + ')' + item.Title
                    }
                }
            // }
        }
    }
}

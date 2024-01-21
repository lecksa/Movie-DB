/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort()

//1
let imgs = document.querySelectorAll('.promo__adv img')

imgs.forEach(img => {
    img.remove()
})

//2
let genre = document.querySelector('.promo__genre')

genre.innerHTML = 'Драма'

//3
let bg = document.querySelector('.promo__bg')

bg.style.backgroundImage = `url(./img/bg.jpg)`
let promo__interactive_ul = document.querySelector('.promo__interactive-list')

//4
for (let item of movieDB.movies) {
    let idx = movieDB.movies.indexOf(item) + 1

    //a
    let promo__interactive_li = document.createElement('li')
    let div_delete = document.createElement('div')

    //b
    promo__interactive_li.classList.add('promo__interactive-item')
    div_delete.classList.add('delete')
    promo__interactive_li.innerHTML = idx + ')' + item

    //c
    promo__interactive_ul.append(promo__interactive_li)
    promo__interactive_li.append(div_delete)

    div_delete.onclick = () => {
        promo__interactive_li.remove()
    }
}

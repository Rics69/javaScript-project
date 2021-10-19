'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie1 = prompt('Один из последних просмотренных фильмов?', '');
let grade1 = prompt('На сколько оцените его?', '');

let lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
let grade2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie1] = grade1;
personalMovieDB.movies[lastMovie2] = grade2;

console.log(personalMovieDB);
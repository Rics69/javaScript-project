'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie1 = prompt('Один из последних просмотренных фильмов?', '');
const grade1 = +prompt('На сколько оцените его?', '');

const lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
const grade2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie1] = grade1;
personalMovieDB.movies[lastMovie2] = grade2;

console.log(personalMovieDB);
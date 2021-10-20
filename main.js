'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    const grade = prompt('На сколько оцените его?', '');
    if(lastMovie != '' && grade != '' && lastMovie != null && grade != null && lastMovie.length < 50){
        personalMovieDB.movies[lastMovie] = grade;
        console.log('Okkk');
    }else{
        console.log('error');
        i--;
    }
}
// let i = 0;
// while(i < 2){
//     const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
//     const grade = +prompt('На сколько оцените его?', '');
//     if(lastMovie == '' && grade == '' && lastMovie == false && grade == false && lastMovie.length > 50){
//         i--;
//     }else{
//         personalMovieDB.movies[lastMovie] = grade;
//     }
//     i++;
// }
// let i = 0;
// do{
//     const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
//     const grade = +prompt('На сколько оцените его?', '');
//     if(lastMovie == '' && grade == '' && lastMovie == false && grade == false && lastMovie.length > 50){
//         i--;
//     }else{
//         personalMovieDB.movies[lastMovie] = grade;
//     }
// }while(i <2);

if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count > 30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
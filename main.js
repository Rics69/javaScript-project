'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count > 30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i<=3; i++){
            const genres = prompt("Введите ваши любимые жанры через запятую").toLowerCase();
            if(genres != '' && genres != null){
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }else{
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
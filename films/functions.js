let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    }
}

start();

const personalMoviesDb = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDb.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error');
            i--;
    
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDb.count < 10) {
        console.log("Просмотренно мало фильмов");
    } else if (personalMoviesDb.count >= 10 && personalMoviesDb.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMoviesDb.count >= 30) {
        console.log("Вы киноман"); 
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDb);
    }
}

showMyDB(personalMoviesDb.privat);

console.log(personalMoviesDb);

function writeYourGenres() {
    for (let i = 1; i <= 3; i ++) {
        personalMoviesDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMoviesDb = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMoviesDb.count < 10) {
    console.log("Просмотренно мало фильмов");
} else if (personalMoviesDb.count >= 10 && personalMoviesDb.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMoviesDb.count >= 30) {
    console.log("Вы киноман"); 
} else {
    console.log("Произошла ошибка");
}

console.log(personalMoviesDb);
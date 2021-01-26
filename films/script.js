const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMoviesDb = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMoviesDb.movies[a] = b;
personalMoviesDb.movies[c] = d;

console.log(personalMoviesDb);
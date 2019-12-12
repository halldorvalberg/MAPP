export const get_cinema = async (cinemas, id) => {
    return cinemas.filter(c => c.id === id);
}

export const get_movies_by_cinema = (movies, id) => {

    // console.log(movies.filter(x => x.showtimes.cinema.id === id ));

    var arr = [];
    movies.filter(m => {
        // console.log(m);
        return m.showtimes.forEach(c => {
            if (c.cinema.id == id) {
                arr.push(c);
            }
            return c.cinema.id == id;
        })
    });
    console.log("MOVIE ------ ARRAY");
    console.log(arr);
    return movie;
}

export const get_showtimes_by_movie = async (movie, id) => {
    return movie.showtimes.forEach(c => {
        return c.id === id;
    });

    return movie.filter(m => m.showtimes.cinema.id === id); // ? maybe ?
}
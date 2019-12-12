export const get_cinema = async (cinemas, id) => {
    return cinemas.filter(c => c.id === id);
}

export const get_movies_by_cinema = (movies, id) => {
    var arr = [];
    movies.filter(m => {
        return m.showtimes.forEach(c => {
            if (c.cinema.id == id) {
                arr.push(m);
            }
            return c.cinema.id == id;
        })
    });
    return arr;
}

export const get_showtimes_by_movie = (movie, id) => {
    return movie.showtimes.filter(x => x.cinema.id == id)
}
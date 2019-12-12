export const get_cinema = async (cinemas, id) => {
    return cinemas.filter(c => c.id === id);
}

export const get_movies_by_cinema = async (movies, id) => {
    console.log(id)
    console.log(movies[0])
    // console.log(movies.filter(x => x.showtimes.cinema.id === id ));
    const movie = movies.filter(m => {
        return m.showtimes.forEach(c => {
            return c.id === id;
        })
    });
    console.log(movie);
    return movie;
}

export const get_showtimes_by_movie = async (movie, id) => {
    return movie.showtimes.forEach(c => {
        return c.id === id;
    });

    return movie.filter(m => m.showtimes.cinema.id === id); // ? maybe ?
}
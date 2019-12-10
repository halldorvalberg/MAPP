const axios = require('axios');

const AUTH = axios({
    method: 'post',
    url: 'https://api.kvikmyndir.is/authenticate',
    data: {
        username: 'mappgods',
        password: 'siggistormur'
    }
}).data;

const API = axios.create({
    baseURL: 'https://api.kvikmyndir.is',
    headers: {'x-access-token': AUTH}
});

export const get_all_cinemas = async () => {
    return API.get('/theaters').data;
}

export const get_cinema = async (id) => {
    const cinemas = await get_all_cinemas();
    console.log(cinemas);
    console.log(cinemas.filter(c => c.id === id));
    return cinemas.filter(c => c.id === id);
}

// Private function kannski?
export const get_all_movies = async () => {
    return API.get('/movies').data;
}

export const get_movies_by_cinema = async (id) => {
    const movies = await get_all_movies();
    // console.log(movies);
    // console.log(movies.filter(x => x.showtimes.cinema.id === id ));
    const movie = movies.filter(m => {
        return m.showtimes.forEach(c => {
            return c.id === id;
        })
    });
    console.log(movie);
    return movie;
}

export const get_upcoming_movies = async () => {
    return API.get('/upcoming').data;
}


// DEPRECATED (maybe?)
// import React from 'react';
// class Api_Service extends React.Component {
//     constructor(props) {
//         super(props);

//         const AUTH = axios({
//             method: 'post',
//             url: 'https://api.kvikmyndir.is/authenticate',
//             data: {
//                 username: 'mappgods',
//                 password: 'siggistormur'
//             }
//         }).data;

//         const API = axios.create({
//             baseURL: 'https://api.kvikmyndir.is',
//             headers: {'x-access-token': AUTH}
//         });
//     }
//     state = {
//         cinemas: await this.get_all_cinemas(),
//         movies: await this.get_all_movies(),
//         upcoming: await this.get_all_upcoming_movies()
//     }

//     async get_all_cinemas() {
//         return API.get('/theaters').data;
//     }

//     async get_all_movies() {
//         return API.get('/movies').data;
//     }

//     async get_all_upcoming_movies() {
//         return API.get('/upcoming').data;
//     }

// }

// export default connect(null, {});
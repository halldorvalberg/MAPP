const axios = require('axios').default;

async function authenticate() {
    return axios({
        method: 'post',
        url: 'http://api.kvikmyndir.is/authenticate/',
        data: {
            username: 'mappgods',
            password: 'siggistormur'
        }
    }).then(function(res) {
        return res.data.token;
    }).catch(function(e) {
        console.log(e);
    });
}

function create_api(token){
    const API = axios.create({
        baseURL: 'http://api.kvikmyndir.is/',
        headers: {'x-access-token': token}
    });
    return API;
}

export const get_all_cinemas = async () => {
    const token = await authenticate();
    const API = create_api(token);

    const cinemas = await API.get('/theaters');
    
    cinemas.data.forEach(element => {
        Object.keys(element).map(key => {
            element[key.trim()] = element[key]
        })
    });

    return cinemas.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
}

export const get_all_movies = async () => {
    const token = await authenticate();
    const API = create_api(token);

    const movies = await API.get('/movies');
    return movies.data;
}

export const get_upcoming_movies = async () => {
    const token = await authenticate();
    const API = create_api(token);

    const upcoming = await API.get('/upcoming');

    return upcoming.data.sort((a, b) => (a["release-dateIS"] > b["release-dateIS"]) ? 1 : -1);
}



// DEPRECATED ----------------------------------
// export const get_cinema = async (id) => {
//     const cinemas = await get_all_cinemas();
//     console.log(cinemas);
//     console.log(cinemas.filter(c => c.id === id));
//     return cinemas.filter(c => c.id === id);
// }

// export const get_movies_by_cinema = async (id) => {
//     const movies = await get_all_movies();
//     // console.log(movies);
//     // console.log(movies.filter(x => x.showtimes.cinema.id === id ));
//     const movie = movies.filter(m => {
//         return m.showtimes.forEach(c => {
//             return c.id === id;
//         })
//     });
//     console.log(movie);
//     return movie;
// }

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
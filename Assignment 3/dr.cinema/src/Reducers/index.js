import * as constants from '../Resources/Constants'

const init_state = {
    cinemas: [],
    movies: [],
    upcoming_movies: []
};

export default (state = init_state, action) => {
    const new_state = { ...state };
    const { type, payload } = action;
    switch (type) {
        case constants.ADD_CINEMAS: {
            new_state.cinemas = [...new_state.cinemas, {...payload.input}];
            return new_state
        }
        case constants.ADD_MOVIES: {
            new_state.movies = [...new_state.movies, {...payload.input}];
            return new_state
        }
        case constants.ADD_UPCOMING: {
            new_state.upcoming_movies = [...new_state.upcoming_movies, {...payload.input}];
            return new_state
        }    
        default: {
            return state;
        }
    }
};
import * as constants from '../Resources/Constants'

export const ADD_CINEMAS = (input) => ({
    type: constants.ADD_CINEMAS,
    payload: {
        input
    }
})
export const ADD_MOVIES = (input) => ({
    type: constants.ADD_MOVIES,
    payload: {
        input
    }
})
export const ADD_UPCOMING = (input) => ({
    type: constants.ADD_UPCOMING,
    payload: {
        input
    }
})
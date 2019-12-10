import * as constants from '../Resources/Constants'

export function set_cinemas(input) {
    return {
        type: constants.ADD_CINEMAS,
        payload: new Promise((resolve, reject ) => {
            setTimeout(() => {
                resolve(input);
            }, 2000)
        })
    }
}


// export const ADD_CINEMAS = (input) => ({
//     type: constants.ADD_CINEMAS,
//     payload: {
//         input
//     }
// })
// export const ADD_MOVIES = (input) => ({
//     type: constants.ADD_MOVIES,
//     payload: {
//         input
//     }
// })
// export const ADD_UPCOMING = (input) => ({
//     type: constants.ADD_UPCOMING,
//     payload: {
//         input
//     }
// })
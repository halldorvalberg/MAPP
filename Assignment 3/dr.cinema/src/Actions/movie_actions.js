import * as constants from '../Resources/Constants'
import * as AS from '../Services/api_service'

const _get_all_movies = () => ({
    type: constants.GET_MOVIES
})

const _get_all_movies_success = (load) => ({
    type: constants.GET_MOVIES_SUCCESS,
    payload: {
        load
    }
})

const _get_all_movies_fail = (error) => ({
    type: constants.GET_MOVIES_FAIL,
    payload: error
});

export const get_all_movies = () => async (dispatch) => {
    dispatch(_get_all_movies());
    return AS.get_all_movies()
        .then((response) => {
            dispatch(_get_all_movies_success(response))
        })
        .catch((error) => {
            dispatch(_get_all_movies_fail(error))
        })
}
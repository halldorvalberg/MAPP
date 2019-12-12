import * as constants from '../Resources/Constants'
import * as AS from '../Services/api_service'

const _get_all_upcoming = () => ({
    type: constants.GET_UPCOMING
})

const _get_all_upcoming_success = (load) => ({
    type: constants.GET_UPCOMING_SUCCESS,
    payload: {
        load
    }
})

const _get_all_upcoming_fail = (error) => ({
    type: constants.GET_UPCOMING_MOVIES_FAIL,
    payload: error
});

export const get_all_upcoming = () => async (dispatch) => {
    dispatch(_get_all_upcoming());
    return AS.get_upcoming_movies()
        .then((response) => {
            dispatch(_get_all_upcoming_success(response))
        })
        .catch((error) => {
            dispatch(_get_all_upcoming_fail(error))
        })
}

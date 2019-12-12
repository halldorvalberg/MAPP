import * as constants from '../Resources/Constants'
import * as AS from '../Services/api_service';

const _get_all_cinemas = () => ({
    type: constants.GET_CINEMAS
});

const get_all_cinemas_success = (load) => ({
    type: constants.GET_CINEMAS_SUCCESS,
    payload: {
        load
    }
})

const get_all_cinemas_fail = (load) => ({
    type: constants.GET_CINEMAS_FAIL,
    payload: load
})

export const get_all_cinemas = () => async (dispatch) => {
    dispatch(_get_all_cinemas());
    return AS.get_all_cinemas()
        .then((responce) => {
            dispatch(get_all_cinemas_success(responce))
        })
        .catch((error) => {
            console.log(error)
            dispatch(get_all_cinemas_fail(error))
        })
}
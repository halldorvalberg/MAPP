import * as constants from '../Resources/Constants'

const _state = { loading_data: false, err: null, data: [] }

export default (state = _state, action) => {
    const { type, payload } = action;
    switch (type) {
        case constants.GET_MOVIES: {
            return { ..._state, loading_data: true }
        }
        case constants.GET_MOVIES_SUCCESS: {
            return { loading_data: false, err: null, data: payload.load }
        }
        case constants.GET_MOVIES_FAIL: {
            return { ..._state, err: payload.error }
        }
        default: {
            return state;
        }
    }
}
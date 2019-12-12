import * as constants from '../Resources/Constants'

const _state = { loading_data: false, err: null, data: [] }

export default (state = _state, action) => {
    const { type, payload } = action;
    switch (type) {
        case constants.GET_CINEMAS: {
            return { ..._state, loading_data: true };
        }
        case constants.GET_CINEMAS_SUCCESS: {
            return { loading_data: false, err: null, data: payload.load }
        }
        case constants.GET_CINEMAS_FAIL: {
            return { ..._state, err: payload.load }
        }
        default: {
            return state;
        }
    }
};

import {combineReducers} from 'redux'

import cinema_reducer from './cinema_reducer'

export default combineReducers({
    cinemas: cinema_reducer
})
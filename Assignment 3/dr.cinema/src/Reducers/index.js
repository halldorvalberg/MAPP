
import {combineReducers} from 'redux'

import cinema_reducer from './cinema_reducer'
import movie_reducer from './movie_reducer'


export default combineReducers({
    cinemas: cinema_reducer, 
    movies: movie_reducer
})
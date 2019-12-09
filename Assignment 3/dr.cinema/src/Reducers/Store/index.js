import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from "../index"

export default createStore(
    reducer,
    applyMiddleware(thunk, promise())
);
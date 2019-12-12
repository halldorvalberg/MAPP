import React from 'react';

import AppContainer from './src/Routes'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import Reducer from './src/Reducers/index'
import { get_all_movies } from './src/Services/api_service';

const store = createStore(Reducer, applyMiddleware(thunk))



export default function App() {
    get_all_movies()
    return (
        <Provider store={store} >
            <AppContainer />
        </Provider>
    );
}
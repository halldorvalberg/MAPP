import React from 'react';
import { StyleSheet } from 'react-native';

import AppContainer from './src/Routes'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducer from './src/Reducers/index'

const store = createStore(Reducer)

export default function App() {
    return (
        <Provider store={store} >
            <AppContainer />
        </Provider>
    );
}
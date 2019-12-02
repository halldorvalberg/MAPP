import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppContainer from './src/routes';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './src/reducers/Contact_Reducer'

const store = createStore(reducer)

export default function App() {
    return (

        <Provider
            store={store}
        >
            <AppContainer />
        </Provider>

    );
}
import React from 'react';
import { StyleSheet } from 'react-native';

import Provider from 'react-redux'
import {createStore} from 'redux'

import Reducer from './src/Reducers/index'

const store = createStore(Reducer)

export default function App() {
    return (
        <Provider store={store} >
            <AppContainer />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import React from 'react';
import AppContainer from './routes';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Data_Reducer from './reducers'

const store = createStore(Data_Reducer)

export default function App() {
    return (
        <Provider
            store={store}
        >
            <AppContainer />
        </Provider>
    );
}
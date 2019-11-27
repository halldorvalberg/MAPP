import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/Home';


export default createAppContainer(createStackNavigator({
    Home
}));
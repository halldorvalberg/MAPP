import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/Home';
import Board from '../views/Board';
import List from '../views/List';
import Task from '../views/Task';


export default createAppContainer(createStackNavigator({
    //Home,
    Board,
    List,
    Task
}));
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Home from '../views/Home';
import Board from '../views/Board';
import List from '../views/List';
import Task from '../views/Task';
import Board_Input from '../views/Board_Input';
import List_Input from '../views/List_Input'
import Task_Input from '../views/Task_Input'


export default createAppContainer(createStackNavigator({
    //Home,
    Board,
    List,
    Task,
    Board_Input,
    List_Input,
    Task_Input
}));
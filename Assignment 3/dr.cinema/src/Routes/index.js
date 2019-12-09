import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinema_Screen from '../View/Cinemas_Screen'

export default createAppContainer(createStackNavigator({
    Cinema_Screen
}));
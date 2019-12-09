import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home_Screen from '../View/Home_Screen';
import Cinema_Screen from '../View/Cinemas_Screen';
import Upcoming_Movies_Screen from '../View/Upcoming_Movies_Screen';
import Cinema_Detail_Screen from '../View/Cinema_Detail_Screen';
import Movie_Screen from '../View/Movie_Screen';

export default createAppContainer(createStackNavigator({
    Home_Screen,
    Cinema_Screen,
    Upcoming_Movies_Screen,
    Cinema_Detail_Screen,
    Movie_Screen
}));
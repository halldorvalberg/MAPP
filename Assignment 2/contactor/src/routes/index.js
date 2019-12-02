import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts_Screen from '../views/Contacts_Screen'

export default createAppContainer(createStackNavigator({
    Contacts_Screen

}))
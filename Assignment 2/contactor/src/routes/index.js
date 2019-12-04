import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts_Screen from '../views/Contacts_Screen'
import Contact_Detail from '../views/Contact_Detail'
import Input_User from '../views/Input_User'

export default createAppContainer(createStackNavigator({
    Contacts_Screen,
    Contact_Detail,
    Input_User
}));
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Contacts_List from '../../components/Contacts_List'

const Contacts_Screen = () => {
    return (
        <ScrollView>
            {/* <Text>View console</Text> */}
            <Contacts_List/>
        </ScrollView>
    )
}

export default Contacts_Screen;
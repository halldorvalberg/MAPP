import React from 'react'
import {Text} from 'react-native'
import { connect } from 'react-redux';
import { FlatList } from "react-native-gesture-handler";

import Contact_List_Item from '../Contact_List_Item'

const Contacts_List = ({contacts}) => (

    <FlatList
        data={contacts}
        renderItem={({item}) => 
            <Contact_List_Item contact={item} />
        }
    />
) 

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps)(Contacts_List);
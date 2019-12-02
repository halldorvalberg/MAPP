import React from 'react'
import {Text, View} from 'react-native'
import { connect } from 'react-redux';
import { FlatList } from "react-native-gesture-handler";
import styles from '../../style.js'

import Contact_List_Item from '../Contact_List_Item'

const Contacts_List = ({contacts}) => (
    <View style={styles.container}>
        <View style={styles.contact_header}>
            <Text style={{fontSize:40, fontWeight:'bold'}}>CONTACTS</Text>
        </View>
        <FlatList
            data={contacts}
            renderItem={({item}) => 
                <Contact_List_Item contact={item} />
            }
            style={styles.flat_list}
        />
    </View>
) 

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps)(Contacts_List);
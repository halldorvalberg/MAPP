import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { FlatList } from "react-native-gesture-handler";
import styles from '../../style.js'

import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import * as Contact_Service from '../../services/Contacts_Service'
import Contact_List_Item from '../Contact_List_Item'

class Contacts_List extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            my_contacts: []
        }
    }

    componentWillMount = async () => {
        const data = await Contact_Service.get_contacts();

        if (data.length > 0) {
            const contact = data;
            contact.sort(function(a, b) {
                if(a.name < b.name) {return -1;}
                if(a.name > b.name) {return 1;}
                return 0;
            })
            this.setState({my_contacts: contact})
        }
    };


    render() {
        const {my_contacts} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.contact_list_header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>CONTACTS</Text>
                </View>
                <FlatList
                    data={my_contacts}
                    renderItem={({ item }) =>
                        <Contact_List_Item contact={item} />
                    }
                    style={styles.flat_list}
                />
            </View>
        )
    }
}

// const mapStateToProps = (state) => ({
//     contacts: state.contacts
// })

export default connect(null)(Contacts_List);
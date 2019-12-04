import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import styles from '../../style.js'

import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'


import * as Contact_Service from '../../services/Contacts_Service'
import Contact_List_Item from '../Contact_List_Item'


class Contacts_List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading_data: false,
            my_contacts: [],
            search_input: ''
        }
    }

    componentWillMount = async () => {
        this.setState({ loading_data: true })
        const contacts = await Contact_Service.get_all_contacts();
        this.setState({ my_contacts: contacts, loading_data: false })
    
    };

    filterList = text => {
        const loading = this.state.loading_data
        if (!loading) {
            var newData = this.state.my_contacts;
            newData = this.state.my_contacts.filter(item => {
                const itemData = item.name.toLowerCase();
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            this.setState({
                search_input: text,
                my_contacts: newData
            });
        }
    };

    render() {
        const { my_contacts } = this.state;
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                {/* Large CONTACTS header */}
                <View style={styles.contact_list_header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>CONTACTS</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.search}>
                    <TextInput
                        placeholder="Search contacts"
                        onChangeText={text => {
                            this.filterList(text);
                        }}
                        onPressCancel={() => {
                            this.filterList("");
                        }}
                    />
                </View>

                <View>
                    <Button
                        title={"Add new Contact"}
                        onPress={() => {navigate("Input_User", {action_type: 'CREATE', contact_obj: {} })}}
                    />
                </View>

                {/* List of all contacts */}
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

export default connect(null)(withNavigation(Contacts_List));
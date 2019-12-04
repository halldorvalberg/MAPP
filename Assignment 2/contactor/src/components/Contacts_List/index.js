import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import styles from '../../style.js'

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

        console.log("This is in props")
        console.log(props)
    }

    componentWillMount = async () => {
        this.setState({ loading_data: true })

        console.log('Component Will Mount Loading_data: True')
        const data = await Contact_Service.get_all_contacts();

        if (data.length > 0) {
            const contact = data;
            contact.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            this.setState({ my_contacts: contact, loading_data: false })
            console.log('Component Will Mount Loading_Data: flse')
        }
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


    componentDidUpdate() {
        // console.log(this.state.search_input)
        // console.log(this.state.my_contacts)
    }

    // componentDidUpdate() {
    //     console.log("Component DID update")
    //     if (!this.state.loading_data) {
    //         console.log("Component DID Update Running Functions")
    //         const { my_contacts, search_input } = this.state
    //         console.log(search_input)

    //         const updated_contacts = my_contacts.filter(item => {
    //             const itemData = `${item.name.toLowerCase()}`;
    //             const textData = search_input.toLowerCase();
    //             return itemData.indexOf(textData) > -1;
    //         });

    //         this.setState({my_contacts: updated_contacts})
    //     }
    // }

    render() {
        const { my_contacts } = this.state;
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

                {/* List of all contacts */}
                <FlatList
                    data={my_contacts}
                    renderItem={({ item }) =>
                        <Contact_List_Item contact={item} />
                    }
                    style={styles.flat_list}
                />

                <View>
                    <Button
                        title={"Add new Contact"}
                        onPress={() => { }}
                    />
                </View>
            </View>
        )
    }
}

// const mapStateToProps = (state) => ({
//     contacts: state.contacts
// })

export default Contacts_List;
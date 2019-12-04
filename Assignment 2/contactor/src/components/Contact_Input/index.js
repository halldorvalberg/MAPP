import React from 'react'
import { View, TextInput, Button, Text, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../../style.js'

import { get_contact } from '../../services/Contacts_Service'

const _state = {
    name: '',
    number: '',
    image: ''
}

export default class Contact_Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = _state
    }

    async componentWillMount() {
        this.setState(_state)

        const _contact_object = await get_contact(this.props.contact_name+".json") 


        const obj = _contact_object//this.props.contact_obj
        console.log(obj)
        // console.log(obj.contact.phoneNumbers[0].number)
        if (obj.contact.imageAvailable) {
            this.setState({ name: obj.contact.name, number: obj.contact.phoneNumbers[0].number, image: obj.contact.image.uri })
        }
        else {
            this.setState({ name: obj.contact.name, number: obj.contact.phoneNumbers[0].number, image: '' })
        }
    }

    async _submit_pressed() {
        const obj = await get_contact(this.props.contact_name+".json");
        console.log(obj)
        if (obj === 'undefined') {
            console.log("I am undefined");
            obj.contact = {};
            obj.contact.name = this.state.name;
            obj.contact.imageAvailable = false;
            obj.contact.phoneNumbers = [{}];
            obj.contact.phoneNumbers[0].number = this.state.number;
            obj.contact.phoneNumbers[0].label = 'mobile';
            obj.contact.phoneNumbers[0].isPrimary = 0;
        } else {
            obj.contact.name = this.state.name;
            obj.contact.phoneNumbers[0].number = this.state.number;
        }
        if (this.state.image.length > 0) {
            if (!obj.contact.imageAvailable) { obj.contact.imageAvailable = true; }
            obj.contact.image = {};
            obj.contact.image.uri = this.state.image;
        }

        this.props._submit_function(obj);
    }

    /**
     * TODO 
     * Crashes if object has null as image
     */

    render() {
        const { name, number, image } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.contact_list_header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>EDIT CONTACT</Text>
                </View>
                <View style={styles.edit_contact_form}>
                    {/* Import Name */}
                    <Text>Name:</Text>
                    <View style={styles.search}>
                        <TextInput
                            onChangeText={text => this.setState({ name: text })}
                            value={name}
                        />
                    </View>

                    {/* Import Phone number */}
                    <Text>Phone number:</Text>
                    <View style={styles.search}>
                        <TextInput
                            onChangeText={text => this.setState({ number: text })}
                            value={number}
                        />
                    </View>
                    <TouchableHighlight>
                        <Icon reverse name='device-camera' type='octicon' />
                    </TouchableHighlight>
                    <View>
                        {/* IMPLEMENT ME!! */}
                    </View>
                </View>
                {/* Submitt button that calls on _submit_pressed() function implemented in this class */}
                <View style={styles.contact_buttons}>
                    <Button
                        title={
                            'Submit'
                        }
                        onPress={() => { this._submit_pressed() }}
                    />
                </View>
            </View>
        )
    }
}
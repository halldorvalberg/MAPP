import React from 'react'
import { View, TextInput, Button, Text, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../../style.js'

import { get_contact } from '../../services/Contacts_Service'
import { select_from_camera_roll, take_photo } from '../../services/Image_Service'

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
        if (!(this.props.contact_name === undefined)) {
            const obj = await get_contact(this.props.contact_name + ".json") 
            
            if (obj.imageAvailable) {
                this.setState({ name: obj.name, number: obj.phoneNumbers[0].number, image: obj.image.uri })
            }
            else {
                this.setState({ name: obj.name, number: obj.phoneNumbers[0].number, image: '' })
            }
        }
    }

    async _submit_pressed() {
        
        if (this.props.contact_name === undefined) {
            const obj = {};
            console.log("I am undefined");
            obj.name = this.state.name;
            obj.imageAvailable = false;
            obj.phoneNumbers = [{}];
            obj.phoneNumbers[0].number = this.state.number;
            obj.phoneNumbers[0].label = 'mobile';
            obj.phoneNumbers[0].isPrimary = 0;
            if (this.state.image.length > 0) {
                if (!obj.imageAvailable) { obj.imageAvailable = true; }
                obj.image = {};
                obj.image.uri = this.state.image;
            }
            this.props._submit_function(obj);
        } else {
            const obj = await get_contact(this.props.contact_name + ".json");
            obj.name = this.state.name;
            obj.phoneNumbers[0].number = this.state.number;
            if (this.state.image.length > 0) {
                if (!obj.imageAvailable) { obj.imageAvailable = true; }
                obj.image = {};
                obj.image.uri = this.state.image;
            }
            this.props._submit_function(obj);
        }
    }

    async set_image(select) {
        let uri = '';
        if(select) {
            uri = await select_from_camera_roll();
        } else {
            uri = await take_photo();
        }
        if (uri.length > 0) {
            this.setState({ image: uri });
        }
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
                    <View>
                        <TouchableHighlight>
                            <Icon raised name='md-image' type='ionicon' onPress={() => this.set_image(true)}/>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Icon raised name='md-camera' type='ionicon' onPress={() => this.set_image(false)}/>
                        </TouchableHighlight>
                    </View>
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
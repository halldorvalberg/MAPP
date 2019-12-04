import React from 'react'
import {View, TextInput , Button, Text} from 'react-native'
import styles from '../../style.js'

export default class Contact_Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            number: '',
            image: ''
        }
    }

    componentWillMount(){
        const obj = this.props.contact_obj
        this.setState({name: obj.name, number: obj.phoneNumbers[0].number, image: obj.image.uri })
    }

    _submit_pressed() {
        const obj = this.props.contact_obj
        obj.name = this.state.name
        obj.phoneNumbers[0].number = this.state.number
        obj.image.uri = this.state.image

        this.props._submit_function(obj)
    }

    render() {
        const {name, number, image} = this.state
        return(
            <View style={styles.container}>
                <View style={styles.contact_list_header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>EDIT CONTACT</Text>
                </View>
                <View style={styles.edit_contact_form}>
                    {/* Import Name */}
                    <Text>Name:</Text>
                    <View style={styles.search}>
                        <TextInput 
                            onChangeText={text => this.setState({name: text})}
                            value = {name}
                        />
                    </View>
        
                    {/* Import Phone number */}
                    <Text>Phone number:</Text>
                    <View style={styles.search}>
                        <TextInput 
                            onChangeText={text => this.setState({number: text})}
                            value = {number}
                        />
                    </View>
        
                    {/* Import Image */}
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
                        onPress={() => {this._submit_pressed()}}
                    />
                </View>
            </View>
        )
    }
}
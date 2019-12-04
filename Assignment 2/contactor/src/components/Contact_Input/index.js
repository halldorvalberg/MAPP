import React from 'react'
import {View, TextInput , Button} from 'react-native'


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
        console.log(obj.contact.phoneNumbers[0].number)
        if(obj.contact.imageAvailable){
            this.setState({name: obj.contact.name, number: obj.contact.phoneNumbers[0].number, image: obj.contact.image.uri })
        }
        else {
            this.setState({name: obj.contact.name, number: obj.contact.phoneNumbers[0].number, image: '' })
        }
    }

    _submit_pressed() {
        const obj = this.props.contact_obj
        obj.contact.name = this.state.name
        obj.contact.phoneNumbers[0].number = this.state.number
        obj.contact.image.uri = this.state.image

        this.props._submit_function(obj)
    }

    /**
     * TODO 
     * Crashes if object has null as image
     */

    render() {
        const {name, number, image} = this.state
        return(
            <View>
                {/* Import Name */}
                <View>
                    <TextInput 
                        onChangeText={text => this.setState({name: text})}
                        value = {name}
                    />
                </View>
    
                {/* Import Phone number */}

                <View>
                    <TextInput 
                        onChangeText={text => this.setState({number: text})}
                        value = {number}
                    />
                </View>
    
                {/* Import Image */}
                <View>
                    {/* IMPLEMENT ME!! */}
                </View>

                {/* Submitt button that calls on _submit_pressed() function implemented in this class */}
                <View>
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
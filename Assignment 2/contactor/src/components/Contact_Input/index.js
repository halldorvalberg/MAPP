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
import React from 'react';
import { View, Button, TextInput } from 'react-native';

const _state = {
    input: {
        name: '', 
        color: ''
    }
}

class List_Input_Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = _state
    }

    input_handler(name, value) {
        const { input } = this.state;
        this.setState({ input: { ...input, [name]: value } });
    }

    create_new_list() {
        const { submit_list } = this.props
        const { input } = this.state
        //Add some checks here to see if input is valid
        submit_list(input);
    }

    render() {
        const { input } = this.state
        return (
            <View>
                <TextInput
                    label='name'
                    placeholder="Enter list name"
                    value={input.name}
                    onChangeText={(text) => this.input_handler('name', text)}
                />  

                {/**ADD COLOR INPUT HERE */}

                <Button
                    title="Create new List"
                    onPress={() => this.create_new_list()}
                />
            </View>
        )
    }
}

export default List_Input_Form
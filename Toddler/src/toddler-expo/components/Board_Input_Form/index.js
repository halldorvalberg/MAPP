import React from 'react';
import { View, Button, TextInput } from 'react-native';

const _state = {
    input: {
        name: '',
        thumbnailPhoto: 'https://www.watereducationcolorado.org/wp-content/uploads/2017/12/placeholder3.png'
    }
}

class Board_Input_Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = _state
    }

    input_handler(name, value) {
        const { input } = this.state;
        this.setState({ input: { ...input, [name]: value } });
    }

    create_new_board() {
        const { sumbit_function } = this.props
        const { input } = this.state
        //Add some checks here to see if input is valid
        sumbit_function(input);
    }

    render() {
        const { input } = this.state
        return (
            <View>
                <TextInput
                    label='name'
                    placeholder="Enter board name"
                    value={input.name}
                    onChangeText={(text) => this.input_handler('name', text)}
                />  

                {/**ADD IMAGE INPUT HERE */}



                <Button
                    title="Create new board"
                    onPress={() => this.create_new_board(input)}
                />
            </View>
        )
    }
}

export default Board_Input_Form
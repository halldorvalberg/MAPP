import React from 'react';
import { Alert, View, Button, TextInput, Text } from 'react-native';
import styles from '../../styles/style'
import {selectFromCameraRoll} from '../../services/Image_Service.js'
import { TouchableHighlight } from 'react-native-gesture-handler';

const _state = {
    input: {
        name: '',
        thumbnailPhoto: 'https://www.watereducationcolorado.org/wp-content/uploads/2017/12/placeholder3.png'
        //thumbnailPhoto: ''
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

    async select_picture() {
        const {input} = this.state;
        const photo = await selectFromCameraRoll();

        if (photo.length > 0) {
            this.setState({ input: {...input, thumbnailPhoto: photo}});
        }
    }

    create_new_board() {
        const { sumbit_function } = this.props
        const { input } = this.state
        if (input.name.length > 0) {
            sumbit_function(input);
        } else {
            Alert.alert("Error", "Enter a board name");
        }
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
                    style={styles.input}
                />  

                <TouchableHighlight 
                    onPress={() => this.select_picture()}
                    style={styles.input_button}
                >
                    <Text style={styles.input_button_text}>
                        SELECT A PICTURE
                    </Text>
                </TouchableHighlight>

                <Button
                    color="#566573"
                    title="Create new board"
                    onPress={() => this.create_new_board(input)}
                />
            </View>
        )
    }
}

export default Board_Input_Form
import React from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from '../../styles/style';
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';

const _state = {
    input: {
        name: '', 
        color: ''
    }
}

class List_Input_Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = _state;
        this.onColorChange = this.onColorChange.bind(this);
    }

    input_handler(name, value) {
        const { input } = this.state;
        this.setState({ input: { ...input, [name]: value } });
    }

    create_new_list() {
        const { submit_list } = this.props;
        const { input } = this.state;
        if (input.name.length > 0) {
            submit_list(input);
        } else {
            Alert.alert("Error", "Enter a list name");
        }
    }

    onColorChange(colour) {
        const { input } = this.state;
        this.setState({ input: {...input, color: fromHsv(colour)}});
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
                    style={styles.input}
                />

                <ColorPicker 
                    oldColor='purple'
                    onColorChange={this.onColorChange}
                    style={{width: '100%', height: '60%', marginBottom: 20}}
                />

                <Button
                    color="#566573"
                    title="Create new List"
                    onPress={() => this.create_new_list()}
                />
            </View>
        )
    }
}

export default List_Input_Form
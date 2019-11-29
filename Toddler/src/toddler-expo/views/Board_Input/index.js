import React from 'react'
import { Button, View, TextInput } from 'react-native'


export default class Board_input extends React.Component {
    state = {
        name: '',
    }

    onInputHandler(name, value) {
        console.log(name + " | " + value)
        this.setState({ [ name ]: value });
    }

    onPress() {
        const {name} = this.state;
        console.log(name)
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    title={'Name'}
                    placeholder={'Enter name of new board'}
                    onChangeText={text => this.onInputHandler('name', text)}
                />
                <Button title="Submit new board" onPress={() => this.onPress() }/>
            </View>
        )
    }
}
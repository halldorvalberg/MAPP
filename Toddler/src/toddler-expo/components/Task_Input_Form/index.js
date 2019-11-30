import React from 'react';
import { View, Button, TextInput } from 'react-native';

const _state = {
    input: {
        name: '',
        description: '',
        isFinished: false
    }
}

class Task_Input_Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = _state
    }

    input_handler(name, value) {
        const { input } = this.state;
        this.setState({ input: { ...input, [name]: value } });
    }

    create_new_task() {
        const { sumbit_function } = this.props
        const { input } = this.state
        //Add some checks here to see if input is valid
        console.log("The input in Tas_Input_From:")
        console.log(input);
        console.log('\n')
        sumbit_function(input);
    }

    render() {
        const { input } = this.state
        return (
            <View>
                <TextInput
                    label='name'
                    placeholder="Enter task name"
                    value={input.name}
                    onChangeText={(text) => this.input_handler('name', text)}
                />  

                <TextInput
                    label='description'
                    placeholder="Enter task description"
                    value={input.description}
                    onChangeText={(text) => this.input_handler('description', text)}
                />  


                <Button
                    title="Create new task"
                    onPress={() => this.create_new_task()}
                />
            </View>
        )
    }
}

export default Task_Input_Form
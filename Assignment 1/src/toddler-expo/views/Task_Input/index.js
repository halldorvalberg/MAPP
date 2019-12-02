import React from 'react'
import { connect } from 'react-redux';

import { View } from 'react-native'
import { Create_Task } from '../../actions/Task_Actions'
import Task_Input_Form from '../../components/Task_Input_Form'


const Task_Input = ({navigation, Create_Task }) => {

    const sumbit_function = (task) => {
        console.log("The input in Task_Input")
        console.log(task)
        console.log('\n')
        const _listid = navigation.state.params._listId
        const returnTask = {
            name: task.name,
            description: task.description,
            isFinished: task.isFinished,
            listId: _listid
        }
        console.log("The input after manipulation in Taks_Input")
        console.log(returnTask)
        console.log('\n')
        Create_Task(returnTask)
    }

    return (
        <View>
            <Task_Input_Form sumbit_function={sumbit_function} />
        </View>
    );
};

export default connect(null, { Create_Task })(Task_Input);
import React from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from "react-native-gesture-handler";

import { Update_Task, Remove_Task } from '../../actions/Task_Actions'


const Task_Items = ({ id, name, description, isFinished, listId, Update_Task, Remove_Task, navigation: { navigate } }) => {

    const _toggle_task = () => {
        newTask = {
            id: id,
            name: name,
            description: description,
            isFinished: !isFinished,
            listId: listId
        }
        Update_Task(newTask);
    }

    const _delete_task = () => {
        Remove_Task(id)
    }

    return (
        <View>
            {/** on press tasks isFinished should be toggled.*/}
            {/** on long press task modal should open with move and delete options*/}
            <TouchableOpacity
                onPress={() => { _toggle_task() }}
                onLongPress={() => console.log("This task has been longpressed " + id)}
            >
                <View>
                    <Text> {name} </Text>
                    <Text> {description} </Text>

                    {isFinished == true ? <Text>Done</Text> : <Text>Not Done</Text>}

                    {/**Remove this and add a small divider between task information and task controlls (elements here bellow) */}
                    <Text>-</Text> 

                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => _delete_task()}
            >
                <View>
                    <Text>Delete this task</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => console.log("Move item number " + id)}
            >
                <View>
                    <Text>Move this task to another list</Text>
                </View>
            </TouchableOpacity>

            {/**Remove this element and create a style that seperates the tasks so they dont appear to be one wall of text */}
            <Text>
                -
                -  
            </Text>

        </View>
    )
}

export default connect(null, { Update_Task, Remove_Task })(withNavigation(Task_Items));

import React from 'react'
import { View, Button, Alert} from 'react-native'
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler'
import View_Task from '../../components/task/View_Task'

const Task = ({tasks, navigation}) => {
    const _listId = navigation.state.params.listId
    const _tasks = tasks.filter(x => x.listId === navigation.state.params.listId)
    return (
            <View>
                <ScrollView>
                    <View_Task
                        tasks={_tasks}
                    />
                </ScrollView>
                <Button 
                    title="Add task" 
                    color="#566573"
                    onPress={() => navigation.navigate('Task_Input', listId={_listId})}
                />
            </View>
        )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(Task);
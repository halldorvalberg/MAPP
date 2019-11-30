import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Task_Item from './Task_Item'
import { connect } from 'react-redux';


const View_Task = ({tasks, listId}) => (
    <FlatList 
        data = {tasks}
        renderItem={({item: {id, name, description, isFinished, listId} }) => (
            <Task_Item
                id = {id}
                name = {name}
                description = {description}
                isFinished = {isFinished}
                listId = {listId}
            />
        )}
        keyExtractor={(elem) => elem.id.toString()}
    />
)

export default connect(null)(View_Task)
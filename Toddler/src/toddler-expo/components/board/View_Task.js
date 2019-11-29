import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Task_Item from './Task_Item'
import { connect } from 'react-redux';


const View_Task = ({tasks}) => (
    <FlatList 
        data = {tasks}
        renderItem={({item: {id, name, description, isFinished} }) => (
            <Task_Item
                id = {id}
                name = {name}
                description = {description}
                isFinished = {isFinished}
            />
        )}
        keyExtractor={(elem) => elem.id.toString()}
    />
)

export default connect(null)(View_Task)
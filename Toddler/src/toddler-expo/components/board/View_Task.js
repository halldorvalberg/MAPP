import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Task_Item from './Task_Item'

const View_Task = ({tasks, navigation}) => (
    <FlatList 
        data = {tasks}
        renderItem={({item: {id, name, description, isFinished} }) => (
            <Task_Item
                id = {id}
                name = {name}
                description = {description}
                isFinished = {isFinished}
                navigation = {navigation}
            />
        )}
        keyExtractor={(elem) => elem.id.toString()}
    />
)

export default View_Task
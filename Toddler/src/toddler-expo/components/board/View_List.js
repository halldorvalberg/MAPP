import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import List_Items from './List_Items'

const View_List = ({ lists, navigation }) => (
    <FlatList
        data={lists}
        renderItem={({ item: { id, name, color } }) => (
            <List_Items
                id={id}
                name={name}
                color={color}
                navigation={navigation}
            />
        )}
        keyExtractor={(elem) => elem.id.toString()}
    />
)

export default View_List
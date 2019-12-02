import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import List_Items from './List_Items'

const View_List = ({ lists }) => (
    <FlatList
        data={lists}
        renderItem={({ item: { id, name, color } }) => (
            <List_Items
                id={id}
                name={name}
                color={color}
            />
        )}
        keyExtractor={(elem) => elem.id.toString()}
    />
)

export default connect(null)(View_List)
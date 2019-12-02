import React from 'react';
import {Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Board_Items from './Board_Items';
import { connect } from 'react-redux';


const View_Board = ({ boards }) => (
    <FlatList
        data={boards}
        renderItem={({ item: { id, name, thumbnailPhoto } }) => (
            <Board_Items
                id={id}
                name={name}
                thumbnailPhoto={thumbnailPhoto}
            />
        )}
        keyExtractor={(elem) => elem.id.toString()}
    />

);

const mapStateToProps = (state) => ({
    boards: state.boards
})

export default connect(mapStateToProps)(View_Board);
import React from 'react'; 
import { Text, FlatList } from 'react-native-gesture-handler';
import Board_Items from './Board_Items';
import { connect } from 'react-redux';

        keyExtractor={(elem) => elem.id.toString()}

const View_Board = ({boards}) => (
        <FlatList
            data={boards}
            renderItem={({item: {id, name, thumbnailPhoto} }) => (
                <Board_Items 
                    id={id}
                    name = {name}
                    thumbnailPhoto = {thumbnailPhoto}
                />
            ListEmptyComponent={(
                <Text>
                    You have no boards. Tap 'Add board' to start creating a new board
                </Text>
            )}
        />
            )}
);

const mapStateToProps = (state) => ({
    boards: state.boards
})

export default connect(mapStateToProps)(View_Board);
import React from 'react'; 
import { FlatList } from 'react-native-gesture-handler';
import Board_Items from './Board_Items';

const View_Board = ({all_boards, navigation}) => (
        <FlatList
            numColumns={2}
            data={all_boards}
            renderItem={({item: {id, name, thumbnailPhoto} }) => (
                <Board_Items 
                    id={id}
                    name = {name}
                    thumbnailPhoto = {thumbnailPhoto}
                    navigation = {navigation}
                />
            )}
            keyExtractor={(elem) => elem.id}
        />
);

export default View_Board
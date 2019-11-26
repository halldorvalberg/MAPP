import React from 'react';
import { View, StyleSheet } from 'react-native';
import Viewable_Boards from './components/board';
import data from './data/data.json'

export default class App extends React.Component {
    state = {
        boards: [
            { id: data.boards[0].id, name: data.boards[0].name, thumbnailPhoto: data.boards[0].thumbnailPhoto},
            { id: data.boards[1].id, name: data.boards[1].name, thumbnailPhoto: data.boards[1].thumbnailPhoto},
            { id: data.boards[2].id, name: data.boards[2].name, thumbnailPhoto: data.boards[2].thumbnailPhoto}
        ]
    }

    render() {
        const {boards} = this.state;
        return(
            <View style={styles.container}>
                <Viewable_Boards/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'lightskyblue',
        alignItems: 'center',
        justifyContent: 'center'

    }
});
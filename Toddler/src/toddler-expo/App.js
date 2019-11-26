import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Viewable_Boards from './components/board';

const data = require('./data/data.json');

export default class App extends React.Component {
    state = {
        boards: [
            { id: data.boards[0].id, name: data.boards[0].name, thumbnailPhoto: data.boards[0].thumbnailPhoto},
            { id: data.boards[1].id, name: data.boards[1].name, thumbnailPhoto: data.boards[1].thumbnailPhoto},
            { id: data.boards[2].id, name: data.boards[2].name, thumbnailPhoto: data.boards[2].thumbnailPhoto}
        ]
    }

    render () {
        return(
            <View style={styles.container}> 
            <Text> Something </Text>
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
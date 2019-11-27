import React from 'react';
import { View, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import Viewable_Boards from './components/board';
import data from './data/data.json';
import styles from './styles/style.js';

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
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Viewable_Boards/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


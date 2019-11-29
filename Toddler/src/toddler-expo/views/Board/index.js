import React from 'react';
import {Alert, ScrollView, View, Button, Text } from 'react-native';
import View_Board from '../../components/board/View_Board';
import styles from '../../styles/style';

export default class Board extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => Alert.alert('incredible functionality')}
                    color="#566573"
                    title="Add board" 
                 />
                <ScrollView>
                    <View_Board />
                </ScrollView>

            </View>
        )
    }
}
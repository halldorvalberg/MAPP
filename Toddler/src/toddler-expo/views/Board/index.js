import React from 'react';
import { Alert, ScrollView, View, Button, Text } from 'react-native';
import View_Board from '../../components/board/View_Board';
import styles from '../../styles/style';

export default class Board extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View_Board />
                </ScrollView>
                <Button
                    onPress={() => this.props.navigation.navigate('Board_Input')}
                    color="#566573"
                    title="Add board"
                />
            </View>
        )
    }
}
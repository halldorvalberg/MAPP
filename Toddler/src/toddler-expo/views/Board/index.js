import React from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
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
                        title='Add board'
                        onPress={() => {this.props.navigation.navigate('Board_Input')}}
                    />
            </View>
        )
    }
}
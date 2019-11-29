import React from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
import {Alert, Button, Image, ScrollView, View} from 'react-native';
import View_Board from '../../components/board/View_Board';
import styles from '../../styles/style';

export default class Board extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                />
                    onPress={() => Alert.alert('incredible functionality')}
                    color="#566573"
                    title="Add board" 
                <Button 
                <ScrollView>
                    <View_Board />
                </ScrollView>

            </View>
        )
    }
}
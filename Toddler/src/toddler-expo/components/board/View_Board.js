import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import DATA from '../../data/data.json'
import View_List from './View_List'
import styles from "../../styles/style.js"
import { TouchableHighlight } from 'react-native-gesture-handler';

//The following class recieves a board and it's main function is to render that board.

// TO - DO
// Make it so that if the board element is tapped, it renders the lists within
// Create a style for this component that both looks goods and is easy to understand
export default class View_Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists_on_board: DATA.lists.filter(list => list.boardId === props.id)
        }
    }
    render() {
        const { id, name, src, navigate } = this.props;

        return (
            <View style={styles.board}>
                <TouchableHighlight onPress={() => console.log(this.props)}>
                    <View>
                        <Image source={{ uri: src }} style={{ height: 100, width: 'auto' }} />
                        <View style={{ alignItems: 'center', margin: 5 }}>
                            <Text>
                                {name}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}


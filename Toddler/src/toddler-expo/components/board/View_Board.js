import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import DATA from '../../data/data.json'
import View_List from './View_List'
import styles from "../../styles/style.js"

//The following class recieves a board and it's main function is to render that board.

// TO - DO
// Make it so that if the board element is tapped, it renders the lists within
// Create a style for this component that both looks goods and is easy to understand
// Add seperator between boards
export default class View_Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists_on_board: DATA.lists.filter(list => list.boardId === props.id)
        }
        console.log(this.props.id)
        console.log('Lists on this board')
        console.log(this.state.lists_on_board)
    }

    render() {
        const { id, name, src } = this.props;
        return (
                <SafeAreaView style={styles.board}>
                    <ScrollView>
                            <Image source={{ uri: src }} style={{ height: 100, width: 'auto' }} />
                            <View style={{alignItems:'center', margin:5}}>
                                <Text>
                                    {name}
                                </Text>
                            </View>
                        
                            {this.state.lists_on_board.map(({id, name, color}) => <View_List key={id} id={id} name={name} color={color} />)}
                    </ScrollView>
                </SafeAreaView>
        )
    }
}


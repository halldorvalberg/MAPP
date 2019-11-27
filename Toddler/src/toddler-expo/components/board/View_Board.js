import React from 'react';
import { View, Text, Image} from 'react-native';
import DATA from '../../data/data.json'
import View_List from './View_List'

//The following class recieves a board and it's main function is to render that board.

// TO - DO
// Make it so that if the board element is tapped, it renders the lists within
// Move component to its own file 
// Create a style for this component that both looks goods and is easy to understand
export default class View_Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists_on_board: DATA.lists.filter(list => list.boardId = props.id)
        }
    }

    render() {
        const {id, name, src} = this.props;
        return(
            <View>
                
                <Image source={{uri: src}} style={{height: 100, width: 100}} />
                
                <Text>
                    Board: {name}
                </Text>
                
                {this.state.lists_on_board.map(({id, name, color}) => <View_List key={id} id={id} name={name} color={color}/>)}
            </View>
        )
    }
}


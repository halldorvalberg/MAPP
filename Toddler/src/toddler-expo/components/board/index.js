import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import DATA from '../../data/data.json'


//The following class retrieves the list of all boards from data/data.json
//It then calls on the class View_Boards. It parses through name and thinbnailPhoto values as props
class Viewable_Boards extends React.Component {
    state = {
        all_boards: DATA.boards
    }
    render() {
        const {all_boards} = this.state;
        return (
            <View>
                {all_boards.map(({id, name, thumbnailPhoto}) => <View_Board key={id} id={id} name={name} src={thumbnailPhoto}/>)}
            </View>
        );
    }
}

//The following class recieves a board and it's main function is to render that board.

// TO - DO
// Make it so that if the board element is tapped, it renders the lists within
// Move component to its own file 
// Create a style for this component that both looks goods and is easy to understand
class View_Board extends React.Component {
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

//The following class receives a list and it's main function is to render it

//TO - DO 
// make it so that if the list element is tapped, it renders the tasks within
// Move component to its own file 
// Create a style for this component that both looks goods and is easy to understand

class View_List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks_on_list: DATA.tasks.filter(task => task.listId === props.id)
        }
    }

    render() {
        const {name, color} = this.props;
        return (
            <View>
                <Text>
                    List: "{name}" in the color {color}
                </Text>

                {this.state.tasks_on_list.map(({id, name, description, isFinished}) => <View_Task key={id} id={id} name={name} description={description} isFinished={isFinished}/>)}

            </View>
        )
    }
}

//The following class recives a task and it's main function is to render it

// TO - DO
// add functions that are connected to the element
//      -Move task
//      -Remove Task
// Move component to its own file 
// Create a style for this component that both looks goods and is easy to understand

class View_Task extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const{name, description, isFinished} = this.props;
        return(
            <View>
                <Text>
                    Task name: "{name}"
                    Task desc: "{description}"
                    Task finished: {isFinished.toString()}
                </Text>
            </View>
        ) 
    }
}

export default Viewable_Boards; 
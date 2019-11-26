import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import DATA from '../../data/data.json'


//Simply print board name
class Viewable_Boards extends React.Component {
    state = {
        all_boards: DATA.boards
    }
    render() {
        return (
            <View>
                {this.state.all_boards.map(({id, name, thumbnailPhoto}) => <View_Board key={id} name={name} src={thumbnailPhoto}/>)}
            </View>
        )
    }
}

class View_Board extends React.Component {
    state = {
        board_lists: DATA.lists
    }

    render() {
        const list = this.state.board_lists.filter(list => list.BoardId === this.props.id)
        const {name, src} = this.props;
        return(
            <View>
                <Image source={{uri: src}} style={{height: 100, width: 100}} />
                <Text>
                    Board: {name}
                </Text>
                {list.map(({id, name, color}) => <View_List key={id} name={name} color={color} id={id}/>)}
            </View>
        )
    }
}

class View_List extends React.Component {
    state = {
        list_tasks: DATA.tasks
    }

    render() {
        const tasks = this.state.list_tasks.filter(task => task.listId === this.props.id)
        const{name, color} = this.props;
        return(
            <View>
                <Text>
                    List: {name} (should be in color {color})
                </Text>
                {tasks.map(({name, description, isFinished}) => <View_Task key={id} name={name} description={description} isFinished={isFinished} />)}
            </View>
        )
    }
}

class View_Task extends React.Component {
    render() {
        const {name, description, isFinished} = this.props;
        return(
            <View>
                <Text>
                    Task name: {name}
                </Text>
                <Text>
                    Task description: {description}
                </Text>
                <Text>
                    is Task finished?: {isFinished.toString()}
                </Text>
            </View>
        )
    }
}


export default Viewable_Boards; 
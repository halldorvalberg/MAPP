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

// class View_Board extends React.Component {
//     state = {
//         board_lists: DATA.lists
//     }

//     get_current_id = () => {
//         const {board_lists} = this.state.board_lists.filter(list => list.name === this.props.name)
//         console.log(current_id)
//         return board_lists.id
//     }

//     render() {
//         const current_id = this.get_current_id()
//         const list = this.state.board_lists.filter(list => list.BoardId === current_id)
//         const {name, src} = this.props;
//         return(
//             <View>
//                 <Image source={{uri: src}} style={{height: 100, width: 100}} />
//                 <Text>
//                     Board: {name}
//                 </Text>
//                 {list.map(({id, name, color}) => <View_List key={id} name={name} color={color}/>)}
//             </View>
//         )
//     }
// }

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


// class View_Task extends React.Component {
//     render() {
//         const {name, description, isFinished} = this.props;
//         return(
//             <View>
//                 <Text>
//                     Task name: {name}
//                 </Text>
//                 <Text>
//                     Task description: {description}
//                 </Text>
//                 <Text>
//                     is Task finished?: {isFinished.toString()}
//                 </Text>
//             </View>
//         )
//     }
// }


export default Viewable_Boards; 
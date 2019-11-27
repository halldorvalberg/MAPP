import React from 'react';
import { View, Text} from 'react-native';
import DATA from '../../data/data.json'
import View_Task from './View_Task'

//The following class receives a list and it's main function is to render it

//TO - DO 
// make it so that if the list element is tapped, it renders the tasks within
// Move component to its own file 
// Create a style for this component that both looks goods and is easy to understand

export default class View_List extends React.Component {
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
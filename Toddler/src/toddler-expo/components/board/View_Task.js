import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import styles from '../../styles/style';

//The following class recives a task and it's main function is to render it

// TO - DO
// add functions that are connected to the element
//      -Move task
//      -Remove Task
// Move component to its own file 
// Create a style for this component that both looks goods and is easy to understand

export default class View_Task extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const{name, description, isFinished} = this.props;
        return(
            <View style={styles.task}>
                <Text>
                    Task name: "{name}"
                    {/*{Task desc: "{description}"
                    Task finished: {isFinished.toString()}*/}
                </Text>
            </View>
        ) 
    }
}

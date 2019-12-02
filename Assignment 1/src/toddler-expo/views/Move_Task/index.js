
/*
REquirements


View should print out all the lists (?in this boad?) 
as touchable objects

if a object is tapped the id of the list is used to 
create a new task object. 

the function should accept a task id thorugh navigation 
and use that to call on the task 

using the old task and the new listid the UPDATE_TASK
 should be called and given the the task with a new lsit id

 */

import React from 'react'
import { Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Update_Task from '../../actions/Task_Actions'
import { connect } from 'react-redux'
import Move_Task_Lists from '../../components/Move_Task_Lists'

class Move_Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    submit_function = (listID) => {
        console.log(listID)
    }

    render() {
        const { lists } = this.props
        return (
            <Move_Task_Lists
                lists={lists}
                submit_function={this.submit_function}

            />
        )
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists
})

export default connect(mapStateToProps)(Move_Task);
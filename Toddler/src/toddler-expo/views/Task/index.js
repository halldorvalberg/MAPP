import React from 'react'
import {View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


import * as Lists_Service from '../../services/Lists_Service'
import * as Tasks_Service from '../../services/Tasks_Service'
import View_Task from '../../components/board/View_Task'

export default class Task extends React.Component {
    constructor(props) {
        super(props)
        state = {
            tasks: [],
            list: {}
        }
    }

    componentWillMount() {
        this._get_state()
    }

    _get_state = () => {
        _listId = this.props.navigation.state.params.listId;
        _list = Lists_Service._get_list_by_id(_listId)
        _tasks = Tasks_Service._get_task_by_listId(_listId)
        this.setState({tasks: _tasks, list: _list[0]})
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View_Task 
                        tasks = {this.state.tasks}
                        navigation = {this.props.navigation}
                    />
                </ScrollView>
            </View>
        )
    }
}
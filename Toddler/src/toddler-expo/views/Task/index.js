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
            loadingData: false,
            tasks: [],
            list: {}
        }
    }

    async componentWillMount() {
        await this.get_state()
    }

    async get_state() {
        listId = this.props.navigation.state.params.listId;
        this.setState({loadingData: true});
        const list = await Lists_Service.get_list_by_id(listId);
        const tasks = await Tasks_Service.get_tasks_by_listId(listId);
        this.setState({loadingData: false, tasks, list});
    }

    // _get_state = () => {
    //     _listId = this.props.navigation.state.params.listId;
    //     _list = Lists_Service._get_list_by_id(_listId)
    //     _tasks = Tasks_Service._get_task_by_listId(_listId)
    //     this.setState({tasks: _tasks, list: _list[0]})
    // }

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
import React from 'react';
import {View} from 'react-native'
import * as Lists_Service from '../../services/Lists_Service'
import * as Board_Service from '../../services/Board_Service'
import View_list from '../../components/board/View_List'
import { ScrollView } from 'react-native-gesture-handler';

export default class List extends React.Component {
    constructor(props) {
        super(props)
        state = {
            loadingData: false,
            lists: [],
            board: {}
        }
    }

    async componentWillMount() {
        await this.get_state()
    }

    async get_state() {
        boardId = this.props.navigation.state.params.boardId;
        this.setState({loadingData: true});
        const board = await Board_Service.get_board_by_id(boardId);
        const lists = await Lists_Service.get_lists_by_boardid(boardId);
        this.setState({loadingData: false, lists, board});
    }

    // _get_state = () => {
    //     _boardId = this.props.navigation.state.params.boardId;
    //     _board = Board_Service._get_board_by_id(_boardId);
    //     _lists = Lists_Service._get_lists_by_boardid(_boardId);
    //     this.setState({lists: _lists, board: _board})
    // }

    render() {
        return(
            <View>
                <ScrollView>
                    <View_list 
                        lists = {this.state.lists}
                        navigation = {this.props.navigation}
                    />
                </ScrollView>
            </View>
        )
    }
} 
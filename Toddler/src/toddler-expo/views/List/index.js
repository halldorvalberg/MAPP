import React from 'react';
<<<<<<< HEAD
import { View } from 'react-native'
import { connect } from 'react-redux';
import View_list from '../../components/board/View_List'
=======
import {View, Button, Alert} from 'react-native'
import * as Lists_Service from '../../services/Lists_Service'
import * as Board_Service from '../../services/Board_Service'
import View_list from '../../components/list/View_List'
>>>>>>> master
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/style';

const List = ({ navigation, lists }) => {
    const _lists = lists.filter(x => x.boardId === navigation.state.params.boardId)
    return (
        <View>
            {/* Create new list func goes here */}
            <ScrollView>
                <View_list lists={_lists} />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    lists: state.lists
})

<<<<<<< HEAD
export default connect(mapStateToProps)(List);
=======
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
            <View style={styles.container}>
                <ScrollView>
                    <View_list 
                        lists = {this.state.lists}
                        navigation = {this.props.navigation}
                    />
                </ScrollView>
                <Button 
                    title="Add list" 
                    color="#566573"
                    onPress={() => Alert.alert('incredible functionality')}
                />
            </View>
        )
    }
} 
>>>>>>> master

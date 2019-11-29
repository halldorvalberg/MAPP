import React from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import View_list from '../../components/board/View_List'
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

export default connect(mapStateToProps)(List);

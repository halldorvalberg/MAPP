import React from 'react';
import { View, Button, Alert } from 'react-native'
import { connect } from 'react-redux';
import View_list from '../../components/list/View_List'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/style';

const List = ({ navigation, lists }) => {
    const _boardId = navigation.state.params.boardId
    const _lists = lists.filter(x => x.boardId === navigation.state.params.boardId)
    return (
        <View style={styles.container}>
            <ScrollView>
                <View_list lists={_lists} />
            </ScrollView>

            <Button
                title="Add List"
                color="#566573"
                onPress={() => navigation.navigate('List_Input', boardId={_boardId})}
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    lists: state.lists
})

export default connect(mapStateToProps)(List);

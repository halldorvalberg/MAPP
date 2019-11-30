import React from 'react'
import { connect } from 'react-redux';
import { View } from 'react-native'

import { Create_List } from '../../actions/List_Actions'

import List_Input_Form from '../../components/List_Input_Form'

const List_Input = ({navigation, Create_List}) => {
    const submit_list = (list) => {
        const _boardId = navigation.state.params._boardId        
        const returnList = {
            name: list.name,
            color: list.color,
            boardId: _boardId
        }
        Create_List(returnList)
    }
    return (
        <View>
            <List_Input_Form submit_list={submit_list} />
        </View>
    );
};

export default connect(null, {Create_List})(List_Input)
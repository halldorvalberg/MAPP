import React from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { TouchableHighlight } from "react-native-gesture-handler";
import { Remove_List } from '../../actions/List_Actions';



const List_Items = ({ id, name, color, navigation: { navigate }, Remove_List }) => {
    const _delete_list = () => {
        Remove_List(id)
    }

    return (
        <View style={{ backgroundColor: color }}>
            <TouchableHighlight
                onPress={() => { navigate('Task', { listId: id }) }}
            >
                <View>
                    <Text> {name} </Text>
                    <Text> </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                onPress={() => _delete_list()}
            >
                <Text>Delete List</Text>
            </TouchableHighlight>
            <Text> -- </Text>
        </View>
    )
}

export default connect(null, { Remove_List })(withNavigation(List_Items));
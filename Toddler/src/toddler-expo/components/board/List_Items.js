import React from 'react';
import {View, Text} from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";

const List_Items = ({id, name, color, navigation}) => (
        <TouchableHighlight onPress={() => {navigation.navigate('Task', {listId: id})}}>
            <View style={{backgroundColor: color}}>
                <Text>
                    {name}
                </Text>
            </View>
        </TouchableHighlight>
)

export default List_Items
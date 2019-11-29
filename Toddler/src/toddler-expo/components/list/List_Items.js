import React from 'react';
import {View, Text} from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";
import styles from '../../styles/style';

const List_Items = ({id, name, color, navigation}) => (
        <TouchableHighlight onPress={() => {navigation.navigate('Task', {listId: id})}}>
            <View style={styles.list_item} backgroundColor={color}>
                <Text style={styles.list_text}>
                    {name}
                </Text>
            </View>
        </TouchableHighlight>
)

export default List_Items
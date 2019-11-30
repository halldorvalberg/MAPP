import React from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { TouchableHighlight } from "react-native-gesture-handler";
import styles from '../../styles/style'


const List_Items = ({ id, name, color, navigation: { navigate } }) => (
    <TouchableHighlight onPress={() => { navigate('Task', { listId: id }) }}>
        <View style={styles.list_item} backgroundColor={color}>
            <Text style={styles.list_text}>
                {name}
            </Text>
            <Text>-</Text>
        </View>
    </TouchableHighlight>
)

export default connect(null)(withNavigation(List_Items));
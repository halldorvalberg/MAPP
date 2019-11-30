import React from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../../styles/style'

const Task_Items = ({ id, name, description, isFinished, navigation: { navigate } }) => (
    <View>
        <TouchableOpacity onPress={() => console.log("You just tapped a task item number " + id + ". Congratz!")}>
            <View style={styles.task_item}>
                <Text> {name} </Text>
                <Text> {description} </Text>

                {isFinished == true ? <Text>Done</Text> : <Text>Not Done</Text>}
                <Text>-</Text>

            </View>
        </TouchableOpacity>
    </View>
)

export default connect(null)(withNavigation(Task_Items));
import React from 'react';
import {View, Text} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

const Task_Items = ({id, name, description, isFinished, navigation}) => (
    <View>
        <TouchableOpacity onPress={() => {navigation.navigate('Task', {listId: id})}}>
            <View>
                <Text>
                    {name}
                </Text>
                <Text>
                    {description}
                </Text>
                
                {isFinished == true ? <Text>Done</Text> : <Text>Not Done</Text>}
                
                <Text>-</Text>

            </View>
        </TouchableOpacity>
    </View>
)

export default Task_Items
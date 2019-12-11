import React from 'react'
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const Cinema_List_Item = ({cinema, navigation: { navigate }}) => {
    return (
        <TouchableOpacity
            onPress={() => navigate('Cinema_Detail', {id: cinema.id})}
        >
            <View>
                <Text>{cinemas.name}</Text>
                <Text>{cinemas.website}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(Cinema_List_Item);
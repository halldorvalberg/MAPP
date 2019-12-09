import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler'


class Cinemas_Screen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>
                    This is the Cinemas_Screen. Here all cinemas registered are displayed in a flatlist
                </Text>

                <TouchableHighlight onPress={() => navigate("Cinema_Detail_Screen")}>
                    <Text>
                        Navigate to Cinema_Detail_Screen
                    </Text>
                </TouchableHighlight>


            </View>
        )
    }
}

export default Cinemas_Screen;
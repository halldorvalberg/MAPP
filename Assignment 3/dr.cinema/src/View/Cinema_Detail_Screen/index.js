import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

class Cinema_Detail_Screen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                <Text>
                    This is the Cinema_Detail_Screen
            </Text>
                <Text>
                    You can't bring your own food to the theater
            </Text>
                <TouchableHighlight onPress={() => navigate("Movie_Screen")}>
                    <Text>
                        Tap here to go to the movie
                </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Cinema_Detail_Screen;
import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

class Upcoming_Movies_Screen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                <Text>
                    This is the Upcoming_Movies_Screen
                </Text>
                <TouchableHighlight onPress={() => navigate("Movie_Screen")}>
                    <Text>
                        Navigate to Movie_Screen
                    </Text>
                </TouchableHighlight>
                <Text>
                    LOOK AT ALL THOSE CHICKENSES
                </Text>
            </View>
        )
    }
}

export default Upcoming_Movies_Screen;
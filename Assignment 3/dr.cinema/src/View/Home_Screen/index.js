import React from 'react'

import { View, Text, TouchableHighlight } from 'react-native'

class Home_Screen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                <View>
                    <Text>
                        This is the Home screen
                    </Text>
                </View>
                <TouchableHighlight onPress={() => navigate("Cinema_Screen")}>
                    <Text>
                        Tap Here to navigate to Cinemas
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate("Upcoming_Movies_Screen")}>
                    <Text>
                        Tap here to navigate to Upcoming Movies
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Home_Screen;
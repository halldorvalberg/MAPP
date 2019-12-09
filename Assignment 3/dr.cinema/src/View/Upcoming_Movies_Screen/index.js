import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import styles from '../../style.js'

class Upcoming_Movies_Screen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>
                        ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ ) 
                    </Text>
                </View>
                <Text style={styles.text}>
                    This is the Upcoming_Movies_Screen
                </Text>
                <TouchableHighlight onPress={() => navigate("Movie_Screen")}>
                    <Text style={styles.text}>
                        Navigate to Movie_Screen
                    </Text>
                </TouchableHighlight>
                <Text style={styles.text}>
                    LOOK AT ALL THOSE CHICKENSES
                </Text>
            </View>
        )
    }
}

export default Upcoming_Movies_Screen;
import React from 'react'

import { View, Text, TouchableHighlight } from 'react-native'
import styles from '../../style.js'

class Home_Screen extends React.Component {
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
                <TouchableHighlight onPress={() => navigate("Cinema_Screen")}>
                    <Text style={styles.text}>
                        Tap Here to navigate to Cinemas
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate("Upcoming_Movies_Screen")}>
                    <Text style={styles.text}>
                        Tap here to navigate to Upcoming Movies
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Home_Screen;
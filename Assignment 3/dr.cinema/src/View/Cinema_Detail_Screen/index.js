import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import styles from '../../style.js'

class Cinema_Detail_Screen extends React.Component {
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
                <View style={styles.page_content}>
                    <Text style={styles.text}>
                        This is the Cinema_Detail_Screen
                    </Text>
                    <Text style={styles.name}>
                        Cinema Name
                    </Text>
                    <TouchableHighlight onPress={() => navigate("Movie_Screen")}>
                        <Text style={styles.text}>
                            Tap here to go to the movie
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default Cinema_Detail_Screen;
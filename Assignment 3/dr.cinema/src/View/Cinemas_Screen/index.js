import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler'
import styles from '../../style.js'


class Cinemas_Screen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>
                    ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
                    </Text>
                </View>
                <Text style={styles.text}>
                    This is the Cinemas_Screen. Here all cinemas registered are displayed in a flatlist
                </Text>

                <TouchableHighlight onPress={() => navigate("Cinema_Detail_Screen")}>
                    <Text style={styles.text}>
                        Navigate to Cinema_Detail_Screen
                    </Text>
                </TouchableHighlight>


            </View>
        )
    }
}

export default Cinemas_Screen;
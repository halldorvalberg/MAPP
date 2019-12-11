import React from 'react';
import * as AS from '../../Services/api_service.js';

import { View, Text, TouchableHighlight } from 'react-native'
import styles from '../../style.js'

class Home_Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cinemas: {},
            movies: {},
            upcoming: {},
            loading_data: false
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>
                        ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
                    </Text>
                </View>
                <View style={styles.page_content}>
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
            </View>
        )
    }
}

export default Home_Screen;
import React from 'react';
import * as AS from '../../Services/api_service.js';

import { View, Text, TouchableHighlight, ActivityIndicator } from 'react-native'
import styles from '../../style.js'
import { get_all_movies } from '../../Actions/movie_actions.js';

class Home_Screen extends React.Component {
    constructor(props) {
        super(props)
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

                <View style={styles.navbar}>
                    <TouchableHighlight onPress={() => navigate("Cinema_Screen")} style={{ height: 30 }}>
                        <View style={styles.button}>
                            <Text> CINEMAS </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate("Upcoming_Movies_Screen")} style={{ height: 30 }}>
                        <View style={styles.button}>
                            <Text> MOVIES </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default Home_Screen;
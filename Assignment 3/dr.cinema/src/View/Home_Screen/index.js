import React from 'react';
import * as AS from '../../Services/api_service.js';

import { View, Text, TouchableHighlight, ActivityIndicator } from 'react-native'
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

    async componentWillMount() {
        this.setState({ loading_data: true })
        const c = await AS.get_all_cinemas();
        const m = await AS.get_all_movies();
        const u = await AS.get_upcoming_movies();
        this.setState({ movies: m, cinemas: c, upcoming: u, loading_data: false });


        // Here go the 'Add this to redux state' commands

        console.log(this.state.cinemas)
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

                {
                    this.state.loading_data
                        ?
                        <View>
                            <ActivityIndicator size="large" color="red" style={{ margin: '30%' }} />
                        </View>
                        :
                            <View style={styles.navbar}>
                                <TouchableHighlight onPress={() => navigate("Cinema_Screen")} style={{ height: 30 }}>
                                    <View style={styles.button}>
                                        <Text>
                                            CINEMAS
                                    </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => navigate("Upcoming_Movies_Screen")} style={{ height: 30 }}>
                                    <View style={styles.button}>
                                        <Text>
                                            MOVIES
                                    </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                }

            </View>
        )
    }
}

export default Home_Screen;
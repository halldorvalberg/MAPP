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

    async componentWillMount() {
        this.setState({loading_data: true})
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
                        <Text style={styles.text}>
                            Loading data. Please wait. 
                        </Text>
                    </View>    
                    :
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

                }

            </View>
        )
    }
}

export default Home_Screen;
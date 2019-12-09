import React from 'react';
import * as AS from '../../Services/api_service.js';

import { View, Text, TouchableHighlight } from 'react-native'

class Home_Screen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cinemas: {},
            movies: {},
            upcoming: {}
        }
    }

    async componentWillMount() {
        const c = await AS.get_all_cinemas();
        this.setState({cinemas: c});
        const m = await AS.get_all_movies();
        this.setState({movies: m});
        const u = await AS.get_upcoming_movies();
        this.setState({upcoming: u});
    }

    render() {
        const {navigate} = this.props.navigation;
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
import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler'
import styles from '../../style.js'
import { withNavigation } from 'react-navigation';
import GoogleMapReact from 'google-map-react';
import { get_all_movies } from '../../Actions/movie_actions'

import { get_movies_by_cinema } from '../../Services/movie_service'


const Cinema_Detail_Screen = ({ navigation }) => {

    const cinema = navigation.state.params.cinema

    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies.data);
    const loading_data = useSelector((state) => state.movies.loading_data);
    React.useEffect(() => {
        dispatch(get_all_movies());
    }, [dispatch]);

    return (
        <View style={styles.container}>

            <View style={styles.header_container}>
                <Text style={styles.header}>
                    ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
                    </Text>
            </View>

            <View style={styles.page_content}>


                {
                    loading_data
                        ?
                        <View>
                            <ActivityIndicator size="large" color="red" style={{ margin: '30%' }} />
                        </View>
                        :
                        <View>
                            <View>
                                <Text style={styles.name}>{cinema.name} </Text>
                                <Text style={styles.text}>{cinema.description}</Text>
                                <View style={styles.details}>
                                <Text style={styles.text}>{cinema.address    }6969 PLACEHOLDER STREET</Text>
                                    <Text style={styles.text}>{cinema.phone}</Text>
                                    <Text style={styles.text}>{cinema.website}</Text>
                                </View>
                            </View>
                            <FlatList
                                data={get_movies_by_cinema(movies, cinema.id)}
                                renderItem={({ item }) =>
                                    <Text style={styles.text}>
                                        {item.title}
                                    </Text>
                                }
                            />
                        </View>
                }
            </View>
        </View>
    )
}

export default withNavigation(Cinema_Detail_Screen);
import React from 'react'

import { View, Text, Image, FlatList, Linking } from 'react-native'
import styles from '../../style.js'
import { withNavigation } from 'react-navigation'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { get_showtimes_by_movie } from '../../Services/movie_service.js'

const Movie_Screen = ({ navigation }) => {
    const { movie, cinema } = navigation.state.params
    const showtimes = get_showtimes_by_movie(movie, cinema)

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}> ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ ) </Text>
            </View>
            <View style={styles.page_content}>
                <Text style={styles.name}> {movie.title} </Text>
                <View style={{ height: 200 }}>
                    <View style={styles.details}>
                        <Image style={styles.movie_img} source={{uri: movie.poster} } />
                        <Text style={styles.movie_description} numberOfLines={14} ellipsizeMode='tail'> {movie.plot} </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}> Duration in Minutes: {movie.durationMinutes} </Text>
                    <Text style={styles.text}> Release year: {movie.year} </Text>
                    <Text style={styles.text}> Genres: </Text>
                    <FlatList
                        data={movie.genres}
                        renderItem={({ item }) => <Text style={styles.text}>{item.Name}</Text>}
                        keyExtractor={(item) => `.${item.ID}`}
                    />

                </View>


            </View>
            <Text style={styles.text}>Select Screening</Text>
            <FlatList
                data={showtimes[0].schedule}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => Linking.openURL(item.purchase_url)}>
                        <Text style={styles.text}>
                        {console.log(item)}
                            {item.time}
                        </Text>
                    </TouchableOpacity>
                }
                keyExtractor={(item) => `.${item.purchase_url}`}
            />
        </View>
    )
}

export default withNavigation(Movie_Screen);
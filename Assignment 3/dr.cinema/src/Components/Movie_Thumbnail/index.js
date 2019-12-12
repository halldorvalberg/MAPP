import React from 'react'

import { Text, View, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const Movie_Thumbnail = ({ cinema, movie, navigation: {navigate} }) => {

    return (
        <View>
            <TouchableOpacity onPress={() => navigate('Movie_Screen', {movie: movie, cinema: cinema})}>
                <View>
                    <Image source={movie.poster} />
                </View>
                <Text>
                    {movie.title}
                </Text>
                <Text>
                    {movie.year}
                </Text>
                <FlatList
                    data={movie.genres}
                    renderItem={({ item }) => <Text>{item.Name}</Text>}
                    keyExtractor={(item) => `.${item.ID}`}
                />
            </TouchableOpacity>
        </View>
    )
}
export default withNavigation(Movie_Thumbnail);
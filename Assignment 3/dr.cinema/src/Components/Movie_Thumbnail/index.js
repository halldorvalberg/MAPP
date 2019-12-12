import React from 'react'

import { Text, View, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import styles from '../../style.js'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed https://github.com/GeekyAnts/NativeBase/issues/2947
])

const Movie_Thumbnail = ({ cinema, movie, navigation: {navigate} }) => {

    return (
        <View>
            <TouchableOpacity onPress={() => navigate('Movie_Screen', {movie: movie, cinema: cinema})}>
                <View style={styles.list_item}>
                    <Image style={styles.list_item_image} source={{uri: movie.poster}} />
                    <Text style={styles.list_item_name}>{movie.title}</Text>
                    <Text style={styles.list_item_info}>{movie.year}</Text>
                
                <FlatList
                    data={movie.genres}
                    renderItem={({ item }) => <Text style={styles.list_list_item_info}>{item.Name}</Text>}
                    keyExtractor={(item) => `.${item.ID}`}
                />
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default withNavigation(Movie_Thumbnail);
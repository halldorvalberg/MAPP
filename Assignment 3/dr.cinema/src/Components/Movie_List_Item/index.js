import React from 'react'
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../style.js'

const Movie_List_Item = ({ movie, navigation: { navigate } }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate('Movie_Detail_Screen', { id: movie.id })}
        >
            <View style={styles.list_item}>
                <Image soruce={{ uri: movie.poster }} style={styles.list_item_image} />
                <View style={{width: 200}}>
                    <Text style={styles.list_item_name} numberOfLines={1} ellipsizeMode='tail'>{movie.name}</Text>
                </View>
                <Text style={styles.list_item_info}>{movie.released}</Text>
                {/* Genre Array display */}
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(Movie_List_Item);
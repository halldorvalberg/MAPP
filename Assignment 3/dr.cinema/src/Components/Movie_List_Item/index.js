import React from 'react'
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const Movie_List_Item = ({movie, navigation: { navigate }}) => {
    return (
        <TouchableOpacity
            onPress={() => navigate('Movie_Detail_Screen', {id: movie.id})}
        >
            <View>
                <Image soruce={{uri: movie.poster}} />
                <Text>{movie.name}</Text>
                <Text>{movie.released}</Text>
                {/* Genre Array display */}
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(Movie_List_Item);
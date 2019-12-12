import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../style'

const Upcoming_List_Item = ({upcoming, navigation: { navigate }}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigate('Trailer_Screen', {trailers: upcoming.trailers})}>
                <View style={styles.list_item}>
                    {/* DATA PREVIEW
                        "poster": "https://kvikmyndir.is/images/poster/12432_500.jpg",
                        "release-dateIS": "2020-02-21",
                        "title": "Bloodshot", */}
                    <Image style={styles.list_item_image} source={{uri: upcoming.poster}}></Image>
                    <Text style={styles.list_item_name}>{upcoming.title}</Text>
                    <Text style={styles.list_item_info}>{upcoming["release-dateIS"]}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(Upcoming_List_Item);
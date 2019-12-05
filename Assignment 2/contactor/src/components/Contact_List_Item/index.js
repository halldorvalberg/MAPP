import React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../style.js'

const Contact_List_Item = ({ contact, navigation: { navigate } }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate('Contact_Detail', { name: contact.name })}
        >
            <View style={styles.flat_list_item}>

                {
                    contact.imageAvailable
                        ?
                        <Image source={{ uri: contact.image.uri }}
                            resizeMode="cover"
                            style={styles.flat_list_item_image} />
                        :
                        <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }}
                            resizeMode="cover"
                            style={styles.flat_list_item_image} />
                }
                <Text style={styles.flat_list_item_text} numberOfLines={1} ellipsizeMode='tail'> {contact.name} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(Contact_List_Item);
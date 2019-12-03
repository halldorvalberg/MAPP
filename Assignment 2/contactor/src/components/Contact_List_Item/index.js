import React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../style.js'

const Contact_List_Item = ({ contact, navigation: {navigate} }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate('Contact_Detail', {name: contact.name, phone_number: contact.phone_number, image: contact.image}) }
        >
            <View style={styles.flat_list_item}>
                <Image source={{ uri: contact.image }}
                    resizeMode="cover"
                    style={styles.flat_list_item_image} />
                <Text style={styles.flat_list_item_text}> {contact.name} </Text>
            </View>
        </TouchableOpacity>
    )
}


export default connect(null)(withNavigation(Contact_List_Item));
import React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { Text, View, Image } from 'react-native'
import { TouchableOpacity  } from 'react-native-gesture-handler'
import styles from '../../style.js'

const Contact_List_Item = ({ contact, navigation: {navigate} }) => {
    console.log("This happens when the item is rendered")
    console.log(contact.image)
    return (
        <TouchableOpacity
            onPress={() => navigate('Contact_Detail', {name: contact.name, phone_number: contact.phoneNumbers[0].number, image: contact.image.uri}) }
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
                {/* <Image source={{ uri: contact.image }}
                    resizeMode="cover"
                    style={styles.flat_list_item_image} /> */}
                <Text style={styles.flat_list_item_text}> {contact.name} </Text>
            </View>
        </TouchableOpacity>
    )
}


export default connect(null)(withNavigation(Contact_List_Item));
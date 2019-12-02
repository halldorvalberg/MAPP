import React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { Text, View, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Contact_List_Item = ({ contact, navigation: {navigate} }) => {
    console.log("This happens when the item is rendered")
    console.log(contact)
    return (
        <TouchableHighlight
            onPress={() => navigate('Contact_Detail', {name: contact.name, phone_number: contact.phone_number, image: contact.image}) }
        >
            <View>
                <Text> {contact.name} </Text>
                {/* <Image source={{ uri: contact.image }}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }} /> */}
            </View>
        </TouchableHighlight>
    )
}


export default connect(null)(withNavigation(Contact_List_Item));
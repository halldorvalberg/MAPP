import React from 'react'
import {Text, View, Image} from 'react-native'

const Contact_List_Item = ({contact}) => {
    return(
        <View>
            <Text> {contact.name} </Text>
            <Image source={{uri: contact.image}} 
                resizeMode="cover"    
                style={{height: 100, width: 100}}/>
        </View>
    )
}

export default Contact_List_Item;
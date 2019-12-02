import React from 'react'
import {Text, View, Image} from 'react-native'
import styles from '../../style.js'

const Contact_List_Item = ({contact}) => {
    return(
        <View style={styles.flat_list_item}>
            <Image source={{uri: contact.image}} 
                resizeMode="cover"    
                style={styles.flat_list_item_image}/>
            <Text style={styles.flat_list_item_text}> {contact.name} </Text>
        </View>
    )
}

export default Contact_List_Item;
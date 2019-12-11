import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../style'


const Cinema_List_Item = ({cinema, navigation: { navigate }}) => {
    return (
        <View>
            <TouchableOpacity
            onPress={() => navigate('Cinema_Detail_Screen', {id: cinema.id})}
        >
            <View>
                <Text style={styles.text}>{cinema.name}</Text>
                <Text style={styles.text}>{cinema.phone}</Text>
                <Text style={styles.text}>{cinema.website}</Text>
                <Text style={styles.text}>{cinema.description}</Text>
                <Text style={styles.text}>{cinema.google_map}</Text>
            </View>
        </TouchableOpacity>
        </View>

        /* 
            í cinema er að finna 
                address
                city
                description
                name
                phone
                website
                google_map
                
                í cinema.
                
        */


    )
}

export default withNavigation(Cinema_List_Item);
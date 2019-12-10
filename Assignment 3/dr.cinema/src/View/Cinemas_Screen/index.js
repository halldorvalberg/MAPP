import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler'
import styles from '../../style.js'

import { connect } from 'react-redux'
const Cinemas_Screen = ({ cinemas }) => (
    
    <View style={styles.container}>
        <View style={styles.header_container}>
            <Text style={styles.header}>
            ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
            </Text>
        </View>
        <View style={styles.page_content}>
            <Text style={styles.text}> This is the Cinemas_Screen. Here all cinemas registered are displayed in a flatlist </Text>
            <FlatList
                data={cinemas}
                renderItem = {({item}) => <Text>{item.name}</Text>}
            />
        </View>

    </View>
)

const mapStateToProps = (state) => ({
    cinemas: state.cinemas
})


export default connect(mapStateToProps)(Cinemas_Screen);
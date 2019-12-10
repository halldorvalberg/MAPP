import React from 'react'

import { View, Text } from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler'
import styles from '../../style.js'

import { connect } from 'react-redux'

const Cinemas_Screen = ({ cinemas }) => (

    <View>
        <Text> This is the Cinemas_Screen. Here all cinemas registered are displayed in a flatlist </Text>

        <FlatList
            data={cinemas}
            renderItem = {({item}) => <Text>{item.name}</Text>}
        />

    </View>
)

const mapStateToProps = (state) => ({
    cinemas: state.cinemas
})


export default connect(mapStateToProps)(Cinemas_Screen);
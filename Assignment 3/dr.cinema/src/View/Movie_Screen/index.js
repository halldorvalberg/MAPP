import React from 'react'

import {View, Text } from 'react-native'
import styles from '../../style.js'

const Movie_Screen = () => (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>
                ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
                </Text>
            </View>
            <Text style={styles.text}>
                This is the Movie_Screen
            </Text>
            <Text style={styles.text}> 
                You like jazz?
            </Text>
        </View>
)

export default Movie_Screen;
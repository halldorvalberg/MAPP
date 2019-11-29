import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'

import styles from './styles';

const Board_Items = ({ id, name, thumbnailPhoto, navigation: {navigate} }) => (
    <View>
        <TouchableOpacity
            onPress={() => {navigate('List', {boardId: id});}}
        >
            <View>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: thumbnailPhoto }}
                    
                />
                <Text>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    </View>

)

export default connect(null)(withNavigation(Board_Items));
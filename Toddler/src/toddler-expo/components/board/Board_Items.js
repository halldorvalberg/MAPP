import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';
import {withNavigation} from 'react-navigation'
import {connect} from 'react-redux'

const Board_Items = ({ id, name, thumbnailPhoto, navigation: {navigate} }) => (
    <View>
        <TouchableOpacity
            onPress={() => {navigate('List', {boardId: id});}}
        >
            <View style={styles.board_item}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: thumbnailPhoto }}
                />
                <Text style={styles.board_text}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
)

export default connect(null)(withNavigation(Board_Items));
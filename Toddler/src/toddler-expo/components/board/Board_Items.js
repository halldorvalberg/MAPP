import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import * as Board_Service from '../../services/Board_Service';
import styles from '../../styles/style';

const Board_Items = ({ id, name, thumbnailPhoto, navigation }) => (
    <View>
        <TouchableOpacity
            onPress={() => {navigation.navigate('List', {boardId: id});}}
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

export default Board_Items;
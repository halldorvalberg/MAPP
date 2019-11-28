import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import * as Board_Service from '../../services/Board_Service';
import styles from './styles';

const Board_Items = ({ id, name, thumbnailPhoto, navigation }) => (
    <View>
        <TouchableOpacity
            onPress={() => {navigation.navigate('List', {boardId: id});}}
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

export default Board_Items;
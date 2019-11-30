import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Remove_Board } from '../../actions/Board_Actions'

const Board_Items = ({ id, name, thumbnailPhoto, navigation: { navigate }, Remove_Board }) => {
    
    const _delete_board = () => {
        Remove_Board(id)
    }

    return (
        <View style={styles.board_item}>
            <TouchableOpacity
                onPress={() => { navigate('List', { boardId: id }); }}
                style={{width:'100%'}}
            >
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: thumbnailPhoto }}
                />
                <Text style={styles.board_text}>
                    {name}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.delete} 
                onPress={() => _delete_board()} 
            >
                <Text style={{color: 'white'}}>
                    Delete board
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect(null, { Remove_Board })(withNavigation(Board_Items));
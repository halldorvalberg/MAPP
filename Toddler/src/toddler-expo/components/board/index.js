import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';


//Simply print board name
class Viewable_Boards extends React.Component {
    _func = () => {
        console.log('It happened')
    }

    render() {
        const { id, src, name } = this.props;
        return(
            <View style={styles.container}>
                <Text>{name}</Text>

                <TouchableHighlight onPress={this._func}>
                    <Image style={{width: 100, height: 100}} source={{uri: src}} />   
                </TouchableHighlight>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'lightskyblue',
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default Viewable_Boards; 
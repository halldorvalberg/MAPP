import { View, StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000000',
        height:'100%',
    },

    header:{
        color:'red',
        fontStyle:'italic',
        fontSize:30,
        margin:10,
        marginLeft:'auto',
        marginRight:'auto',
        width:'auto',

    },

    header_container:{
        marginBottom:10,
        borderBottomWidth:2,
        borderBottomColor:'red',
    },

    text:{
        color:'white'
    }
});

export default styles;
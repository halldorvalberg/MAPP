import { View, StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#333333',
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

    page_content:{
        width:'100%',
        height:'100%',
        margin:'3%'
    },

    name:{
        fontSize:30,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'white',
        marginBottom:20
    },

    movie_details:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent:'space-around',
    },

    movie_img: {
        width:'30%',
        height:'95%',
        backgroundColor:'black'
    },

    movie_description:{
        color:'white',
        width:'55%',
        height:200
    },

    text:{
        color:'white'
    }
});

export default styles;
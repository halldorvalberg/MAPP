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
        borderBottomWidth:2,
        borderBottomColor:'red',
    },

    navbar:{
        width:'100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },

    page_content:{
        width:'94%',
        margin:'3%',
    },

    button:{
        height:30,
        padding:5,
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'red',
        justifyContent:'space-around',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
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
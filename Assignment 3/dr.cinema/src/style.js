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

    screenings:{
        margin:'3%',
        height:'30%',
        marginTop:'15%',
    },

    page_content:{
        width:'94%',
        margin:'3%',
    },

    list_item:{
        marginLeft:10,
        paddingRight:10,
        marginBottom:10,
        height:50,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'maroon',
        alignItems:'center',
        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
    },

    list_item_image: {
        height: 48,
        width: 48,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        marginRight:10,
    },

    list_item_name:{
        color:'white',
        fontSize:15,
        width:'65%',
        paddingLeft:10
    },

    list_item_info:{
        color:'#dddddd',
        fontStyle:'italic',
    },

    list_item_genres:{
        color:'#dddddd',
        fontStyle:'italic',
        fontSize:8,
        marginLeft:10,
        marginLeft:10,
    },

    trailer:{
        width:'80%',
        height:'30%',
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

    details:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent:'space-evenly',
        marginTop:30,
        marginBottom:30,
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
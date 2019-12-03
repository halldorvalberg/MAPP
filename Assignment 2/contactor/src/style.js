import { View, StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height:'100%',
    },

    flat_list:{
        flex: 1,
        flexDirection:'column',
        flexWrap:'wrap',
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
    },

    //ATH BORDER ATTRIBUTES ERU GERÐ FYRIR VIEW
    flat_list_item:{
        backgroundColor:'#ffffff',
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        width:'auto',
        height:50,
        borderWidth:1,
        borderColor:'#dddddd',
        borderBottomLeftRadius:25,
        borderTopLeftRadius:25,
        marginBottom:10,
        marginLeft:10,
        alignItems:'center',
    }, 

    flat_list_item_image: {
        height:40,
        width:40,
        margin:5,
        borderRadius:20,
    },

    flat_list_item_text: {
        fontSize:20,
        marginLeft:10,
    },

    contact: {
        flex: 1,
        flexDirection:'column',
        flexWrap:'wrap',
        
    },

    contact_image:{
        width:'auto',
        height:250,
    },

    contact_details: {
        width:'90%',
        height:'auto',
        padding:'5%',
        borderWidth:1,
        borderColor:'#dddddd',
        borderRadius:10,
        margin:'5%',
        backgroundColor:'#ffffff'
    },

    contact_list_header:{
        flex:1,
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20,
        marginBottom:30,
        fontSize:50,
    },

    edit_contact:{

    },

    //ATH BORDER ATTRIBUTES ERU GERÐ FYRIR VIEW
    edit_contact_form: {
        padding:'5%',
        margin:'5%',
        borderWidth:1,
        borderColor:'#5e5e5e',
        borderRadius:5,
        margin:5,
        elevation:10
    }

});

export default styles;
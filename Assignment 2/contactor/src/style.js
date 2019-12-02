import { View, StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    flat_list:{
        flex: 1,
        flexDirection:'column',
        flexWrap:'wrap',
        width:'90%'
    },

    //ATH BORDER ATTRIBUTES ERU GERÐ FYRIR VIEW
    flat_list_item:{
        width:'auto',
        height:100,
        borderWidth:1,
        borderColor:'#5e5e5e',
        borderRadius:5,
        margin:5
    }, 

    contact: {
        flex: 1,
        flexDirection:'column',
        flexWrap:'wrap',
        borderWidth:1,
        borderColor:'#5e5e5e',
        borderRadius:5,
        elevation:10
    },

    contact_image:{
        width:'auto',
        height:250,
    },

    contact_details: {
        width:'auto',
        height:'auto',
        padding:'5%',
        margin:'5%'
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
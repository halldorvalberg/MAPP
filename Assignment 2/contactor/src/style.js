import { View, StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        height: '100%',
    },

    search: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
    },

    edit_contact_form: {
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 10,
        height: 230
    },

    flat_list: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    //ATH BORDER ATTRIBUTES ERU GERÐ FYRIR VIEW
    flat_list_item: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 'auto',
        height: 50,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        marginBottom: 10,
        marginLeft: 10,
        alignItems: 'center',
    },

    flat_list_item_image: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 20,
    },

    flat_list_item_text: {
        fontSize: 20,
        marginLeft: 10,
        width: '70%'
    },

    contact: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',

    },

    contact_image: {
        width: 'auto',
        height: 250,
    },

    contact_details: {
        width: '90%',
        height: 'auto',
        padding: '5%',
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 10,
        margin: '5%',
        backgroundColor: '#ffffff'
    },

    contact_list_header: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 50,
    },

    edit_contact: {

    },


    contact_buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        margin: 10
    }
});

export default styles;
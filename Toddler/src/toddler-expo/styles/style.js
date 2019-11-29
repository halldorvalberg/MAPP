import { View, StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(27,36,36,1)',
    },

    navbar: {
        width:'100%',
        height:100,
        alignItems:'center',
        paddingTop:55,
    },

    boards: {
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding:'5%',
        marginTop:50,
    },

    board: {
        width: '45%',
        height: 250,
        // backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 20,
        elevation: 5,
    },

    list: {
        padding:5,
        marginBottom: 10,
    },

    task: {
        marginBottom:5,
    },

    board_item: {
        backgroundColor: 'rgba(44,62,70,1)',
        padding: 5,
        flexDirection: 'row',
        margin: 5
    },

    board_text: {
        paddingLeft: '2%',
        color: 'rgba(211,218,225,1)',
        fontWeight: 'bold',
        fontSize: 15
    },

    image: {
        width: 110,
        height: 70,
        position: 'relative',
      }

});

export default styles;

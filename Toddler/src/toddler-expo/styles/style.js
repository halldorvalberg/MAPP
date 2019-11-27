import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#669966',
        borderWidth:1,
    },

    navbar: {
        width:'100%',
        height:100,
        backgroundColor:'white',
        alignItems:'center',
        paddingTop:55,

    },

    boards: {
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding:'5%',
        marginTop:50
    },

    board: {
        width: '45%',
        height: 250,
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 20,
        elevation:5
    },

    list: {
        padding:5,
        marginBottom: 10,
    },

    task: {
        marginBottom:5,
    }
});

export default styles;

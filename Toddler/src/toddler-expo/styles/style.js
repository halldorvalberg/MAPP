import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#669966',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
    },

    boards: {
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding:'5%'
    },

    board: {
        width: '45%',
        height: 250,
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 5,
    },

    list: {
        padding:5,
        marginBottom: 30,
    }
});

export default styles;
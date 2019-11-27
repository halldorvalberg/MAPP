import React from 'react';
<<<<<<< HEAD
import { View, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import Viewable_Boards from './components/board';
import data from './data/data.json';
import styles from './styles/style.js';
=======
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Viewable_Boards from './components/board';
>>>>>>> 2fcf7198803719e68cb295dbb694ec34f21aa46d

export default class App extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
<<<<<<< HEAD
                <ScrollView >
=======
                <ScrollView style={styles.scrollView}>
>>>>>>> 2fcf7198803719e68cb295dbb694ec34f21aa46d
                    <Viewable_Boards/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'lightskyblue',
		alignItems: 'center',
		justifyContent: 'center'
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    }
});
>>>>>>> 2fcf7198803719e68cb295dbb694ec34f21aa46d

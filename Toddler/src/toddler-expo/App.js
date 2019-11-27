import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Viewable_Boards from './components/board';

export default class App extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Viewable_Boards/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

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

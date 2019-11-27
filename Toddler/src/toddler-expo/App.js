import React from 'react';
import {View, Text, SafeAreaView, ScrollView } from 'react-native';
import Viewable_Boards from './components/board';
import styles from './styles/style.js';

export default class App extends React.Component {
    render() {
        return(
            
                <SafeAreaView style={styles.container}>
                    <View style={styles.navbar}>
                        <Text style={{fontSize:30}}>Boards</Text>
                    </View>
                    <ScrollView >
                        <Viewable_Boards/>
                    </ScrollView>
                </SafeAreaView>
        );
    }
}


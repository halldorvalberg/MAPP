import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Viewable_Boards from './components/board';
import styles from './styles/style.js';

export default class App extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Viewable_Boards/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


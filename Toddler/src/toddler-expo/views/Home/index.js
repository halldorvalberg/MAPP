import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../../styles/style'

const Home = ({ navigation }) => (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home screen</Text>
      <TouchableHighlight onPress={() => { navigation.replace('Board'); }}>
        <Text>Tap here to go to the boards</Text>
      </TouchableHighlight>
    </View>
  );
Home.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};


export default Home;
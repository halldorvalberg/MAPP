import React from 'react'

import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import { withNavigation } from 'react-navigation';
import styles from '../../style';

const Trailer_Screen = ({ navigation }) => {
    const trailers = navigation.state.params.trailers;
    console.log(trailers);
    if (trailers[0] != undefined) {
        const key = trailers[0].results[0].key;
        console.log(`https://www.youtube.com/embed/${key}`);
        return (
            <View style={styles.container}>
                <View style={styles.details}>
                    <View style={styles.trailer}>
                        <WebView

                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{ uri: `https://www.youtube.com/embed/${key}` }}
                        />
                    </View>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.list_item_name}>No trailer sorry    ʕノ•ᴥ•ʔノ ︵ ┻━┻</Text>
            </View>
        )
    }
}

export default withNavigation(Trailer_Screen);
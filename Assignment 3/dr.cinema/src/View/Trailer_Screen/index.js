import React from 'react'

import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import { withNavigation } from 'react-navigation';
import styles from '../../style';

const Trailer_Screen = ({ navigation }) => {
    const trailers = navigation.state.params.trailers
    const url = trailers[0].results[0].url
    return (
        <View>

            <WebView
                style={styles.frame}
                url={url}
                renderLoading={this.renderLoading}
                renderError={this.renderError}
                automaticallyAdjustContentInsets={false}
            />

        </View>
    )
}

export default withNavigation(Trailer_Screen);
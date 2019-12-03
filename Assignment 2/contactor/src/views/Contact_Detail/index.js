import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from "../../style.js"

class Contact_Detail extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const { name, image, phone_number } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                    <Image 
                        source={{uri: image}}
                        resizeMode="cover"
                        style={styles.contact_iamge} 
                    />
                    <View style={styles.contact_details}>
                        <Text>
                            {name}
                        </Text>
                        <Text>
                            {phone_number}
                        </Text>
                    </View>
            </View>
        )
    }
}

export default Contact_Detail;
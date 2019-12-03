import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from "../../style.js"

class Contact_Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { contact } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                {
                    contact.imageAvailable
                        ?
                        <Image
                            source={{ uri: contact.image.uri }}
                            resizeMode="cover"
                            style={styles.contact_image}
                        />
                        :
                        <Text></Text>
                }
                <View style={styles.contact_details}>
                    <Text>
                        {contact.name}
                    </Text>
                    <Text>
                        {contact.phoneNumbers[0].number}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Contact_Detail;
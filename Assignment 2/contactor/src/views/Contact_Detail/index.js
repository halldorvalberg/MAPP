import React from 'react';
import { View, Text, Image, Button, Alert} from 'react-native'
import styles from "../../style.js"

class Contact_Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { contact } = this.props.navigation.state.params;
        return (
            // Spurning að henda eftirfarandi virkni í component. Gæti verið meira nice
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
                    <Text style={{fontWeight:'bold', fontSize:20}}>
                        {contact.name}
                    </Text>
                    <Text>
                        {contact.phoneNumbers[0].number}
                    </Text>
                </View>
                
                <View style={styles.contact_buttons}>
                    <Button
                        title={'Call'}
                        style={{height:100}}
                        onPress={() => Alert.alert("This button should open the phone app and allow you to call the user... but it does't ... yet")}
                    />
                    <Button
                        title={'Edit'}
                        onPress={() => Alert.alert('Here we will put the edit functionality')}
                    />
                </View>
            </View>
        )
    }
}

export default Contact_Detail;
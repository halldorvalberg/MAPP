import React from 'react';
import { Linking } from 'expo';
import { View, Text, Image, Button, Alert } from 'react-native'
import styles from "../../style.js"

import {get_contact} from '../../services/Contacts_Service'

class Contact_Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {}
        }
        
    }

    async componentWillMount() {
        console.log("this.props.navigation.state.params.name")
        console.log(this.props.navigation.state.params.name)
        const _contact = await get_contact(this.props.navigation.state.params.name + ".json")
        console.log("_contact")
        console.log(_contact)
        this.setState({contact: _contact})
    }

    render() {
        const { contact } = this.state;
        const { navigate } = this.props.navigation
        console.log(contact)
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
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        {contact.name}
                    </Text>
                    <Text>
                        {contact.phoneNumbers != undefined ? contact.phoneNumbers[0].number : <></>}
                    </Text>

                </View>

                <View style={styles.contact_buttons}>
                    <Button
                        color='green'
                        title={'Call'}
                        onPress={() => Linking.openURL('tel:' + contact.phoneNumbers[0].number)}

                    />
                    <Button
                        title={'Edit'}
                        onPress={() => navigate('Input_User', { action_type: 'UPDATE', contact_obj: { contact } })}
                    />
                </View>
            </View>
        )
    }
}

export default Contact_Detail;
import React from 'react';
import { View, Text, Image } from 'react-native'

class Contact_Detail extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const { name, image, phone_number } = this.props.navigation.state.params;
        return (
            < View >
                <Text>
                    {name}
                </Text>
                <Text>
                    {phone_number}
                </Text>
                <Image 
                    source={{uri: image}}
                    resizeMode="cover"
                    style={{ height: 100 }} 
                />
            </View >
        )
    }
}

export default Contact_Detail;
import React from 'react'
import { View } from 'react-native'

import Contact_Input from '../../components/Contact_Input'

import * as Contact_Service from '../../services/Contacts_Service'

class Input_User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action_type: this.props.navigation.state.params.action_type

        }
        // console.log(props)
        // console.log(this.props.navigation.state.params.action_type)
    }
    
    submit_function = (object) => {

        const action_type = this.state.action_type

        if(action_type === 'UPDATE')
        {
            console.log("Im here")
        }
        else
        {
            console.log("Im nost suposed to be here")
            Contact_Service.save_contact(object)
        }
    }
    render() {
        const { contact_obj } = this.props.navigation.state.params
        return (
            <View>
                <Contact_Input _submit_function={this.submit_function} contact_obj={contact_obj} />
            </View>
        )
    }
}

export default Input_User;
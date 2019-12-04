import React from 'react'
import { View } from 'react-native'

import Contact_Input from '../../components/Contact_Input'

import * as Contact_Service from '../../services/Contacts_Service'

class Input_User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action_type: '',
            contact_obj: {}
        }

        // console.log(props)
        // console.log(this.props.navigation.state.params.action_type)
    }

    async componentWillMount() {
        console.log("Im at Input User Will mount")
        //console.log("COMPONJENT WIL MJPIUTN")
        const _action_type = this.props.navigation.state.params.action_type
        //console.log(_action_type)
        const _contact_name = this.props.navigation.state.params.name
        //console.log(_contact_name)
        const _contact_object = await Contact_Service.get_contact(_contact_name + '.json');

        console.log("_contact_object")
        console.log(_contact_object)

        this.setState({ action_type: _action_type, contact_obj: _contact_object })


    }

    submit_function = (object) => {


        const { action_type, contact_obj } = this.state

        if (action_type === 'UPDATE') {
            Contact_Service.edit_contact(contact_obj, object)
        }
        else {
            Contact_Service.save_contact(object)
        }
    }
    render() {
        const { contact_obj } = this.state
        const { name } = this.props.navigation.state.params
        console.log("Im at Input user Rnder")
        return (

            <View>
                <Contact_Input _submit_function={this.submit_function} contact_name={name} />
            </View>
        )
    }
}

export default Input_User;
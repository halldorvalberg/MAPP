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
    }

    async componentWillMount() {
        const _action_type = this.props.navigation.state.params.action_type
        const _contact_name = this.props.navigation.state.params.name
        let _contact_object = {};
        if (_contact_name != undefined) {
            _contact_object = await Contact_Service.get_contact(_contact_name + '.json');
        }
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
        const { name } = this.props.navigation.state.params
        return (
            <View>
                <Contact_Input _submit_function={this.submit_function} contact_name={name} action_type={this.state.action_type} />
            </View>
        )
    }
}

export default Input_User;
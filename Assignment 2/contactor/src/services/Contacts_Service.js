import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native'

async function get_permission() {
    const status = await Permissions.askAsync(Permissions.Contacts)
    return status;
}

export const get_contacts = async () => {
    if (get_permission() != 'granted') {
        return -1;
    } 

    // Contacts.getContactsAsync(contactQuery: ContactQuery)
    const data = await Contacts.getContactsAsync({})
    return data;
}

export const get_contact_by_id = async (id) => {
    if (get_permission() != 'granted') {
        return -1;
    } 
    
    // Contacts.getContactByIdAsync(contactId: string, fields: FieldType[])
    const data = await Contacts.getContactByIdAsync(id);
    return data;
}

export const create_contact = async(contact) => {
    if (get_permission() != 'granted') {
        return -1;
    } 
    
    // const contact = {
    //     [Contacts.Fields.FirstName]: 'Bird',
    //     [Contacts.Fields.LastName]: 'Man',
    //     [Contacts.Fields.Company]: 'Young Money',
    // };
    const id = await Contacts.addContactAsync(contact);
    return id;
}

export const update_contact = async (contact) => {
    if (get_permission() != 'granted') {
        return -1;
    } 
    
    // const contact = {
    //     id: '161A368D-D614-4A15-8DC6-665FDBCFAE55',
    //     [Contacts.Fields.FirstName]: 'Drake',
    //     [Contacts.Fields.Company]: 'Young Money',
    //   };
    if (Platform.OS == 'ios') {
        await Contacts.updateContactAsync(contact)
    } else {
        await Contacts.presentFormAsync(contact.id, contact)
    }
    return contact.id;
}

export const delete_contact = async (id) => {
    if (get_permission() != 'granted') {
        return -1;
    } 

    if (Platform.OS == 'ios') {
        await Contacts.removeContactAsync(id);
    } else {
        await Contacts.removeContactAsync(id);
    }
}
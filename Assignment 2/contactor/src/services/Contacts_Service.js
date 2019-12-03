import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

 import {save_contact, get_all_contacts} from './File_Service.js';

// import * as FS from './File_Service.js'

import { Platform } from 'react-native'

async function get_permission() {
    const status = await Permissions.askAsync(Permissions.CONTACTS);
    return status.status;
}

async function import_from_os() {
    if (await get_permission() != 'granted') {
        console.log("ERROR in permissions - status: ", status)
        return -1;
    } 
    
    // Contacts.getContactsAsync(contactQuery: ContactQuery)
    const data = await Contacts.getContactsAsync({});

    // Save each contact to AsyncStorage
    data.data.forEach(save_contact);
}

export const get_contacts = async () => {
    import_from_os();

    // Save each contact to AsyncStorage
    const contacts = await get_all_contacts();
    return contacts;
}













/// ALL ADDED FUNCTIONALITY IN DATA.JSON NOT FROM PHONE STORAGE

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
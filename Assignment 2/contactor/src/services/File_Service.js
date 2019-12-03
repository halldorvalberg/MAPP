import * as FileSystem from 'expo-file-system';
import {AsyncStorage} from 'react-native';

const dir_contacts = FileSystem.documentDirectory + "contacts/";

export async function save_contact(contact) {
    try {
        await AsyncStorage.setItem(contact.name, JSON.stringify(contact));
    } catch(e) {
        console.log("Error saving data: ", e.message);
    }
}

export const get_all_contacts = async () => {
    const contacts = [];
    const keys = await AsyncStorage.getAllKeys();

    console.log("Keys: ", keys);

    let temp = '';

    for ( i = 0; i < keys.length; i++) {
        temp = await get_contact(keys[i]);
        contacts.push(JSON.parse(temp));
    };
    return contacts;
}

export const get_contact = async(name) => {
    let contact = '';
    try {
        contact = await AsyncStorage.getItem(name);
    } catch(e) {
        console.log("Error getting data: ", e.message);
    }
    return contact;
}

export async function remove_contact(name) {
    try {
        await AsyncStorage.removeItem(name);
    } catch(e) {
        console.log("Error removing data: ", e.message);
    }
}
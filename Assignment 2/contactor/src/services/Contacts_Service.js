import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';

import {select_from_camera_roll, take_photo} from './Image_Service';

// ------------ v3.0
// ------------ Contact service using FileSystem

const dir_contacts = FileSystem.documentDirectory + "contactor/";

async function get_permission() {
    const status = await Permissions.askAsync(Permissions.CONTACTS);
    if (status.status != 'granted') {
        console.log("ERROR in permissions - status: ", status)
        return false;
    } 
    return true;
}
async function get_permission_camera() {
    const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status.status != 'granted') {
        console.log("ERROR in permissions - status: ", status)
        return false;
    } 
    return true;
}

async function import_from_os() {
    try {
        await FileSystem.makeDirectoryAsync(dir_contacts);
    } catch {console.log("Directory already exists.")}
    
    if(await get_permission())
    {
        // Contacts.getContactsAsync(contactQuery: ContactQuery)
        const contacts = await Contacts.getContactsAsync({});

        // Save each contact to AsyncStorage
        contacts.data.forEach(save_contact);
    }
}

export const edit_contact = async (_old, _new) => {
    remove_contact(_old);
    save_contact(_new);
}

export async function save_contact(contact) {
    const path = dir_contacts + contact.name + '.json';

    await FileSystem.writeAsStringAsync(path, JSON.stringify(contact)); 
}

export const get_all_contacts = async () => {
    await import_from_os();

    const contacts = [];
    const files = await FileSystem.readDirectoryAsync(dir_contacts);
    let single = '';

    for(i = 0; i < files.length;i++) {
        single = await get_contact(files[i]);
        contacts.push(single);
    };

    contacts.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });

    return contacts;
}

export const get_contact = async(name) => {
    const contact = await FileSystem.readAsStringAsync(dir_contacts + name);
    // console.log(contact);
    return JSON.parse(contact);
}

export async function remove_contact(name) {
    try {
        await Filesystem.deleteAsync(dir_contacts + name + '.json');
    } catch(e) {
        console.log("Error: Directory/File does not exist " + e);
    }
}

export async function set_image(contact, select) {
    const uri  = '';
    if(select) {
        uri = await select_from_camera_roll();
    } else {
        uri = await take_photo();
    }
    console.log(uri);

    if (uri.length > 0) {
        contact.imageAvailable = true;
        contact.image.uri = uri;
    } else {
        console.log("Error setting image");
    }
    await save_contact(contact)
}


// ------------ v2.0 - DEPRECATED
// ------------ Contact service using AsyncStorage 

// import {AsyncStorage, Platform} from 'react-native';

// async function _get_permission() {
//     const status = await Permissions.askAsync(Permissions.CONTACTS);
//     return status.status;
// }

// async function _import_from_os() {
//     if (await get_permission() != 'granted') {
//         console.log("ERROR in permissions - status: ", status)
//         return -1;
//     } 
    
//     // Contacts.getContactsAsync(contactQuery: ContactQuery)
//     const data = await Contacts.getContactsAsync({});

//     // Save each contact to AsyncStorage
//     data.data.forEach(save_contact);
// }

// export const _get_all_contacts = async () => {
//     await import_from_os();

//     const contacts = [];
//     const keys = await AsyncStorage.getAllKeys();

//     let single = '';

//     for ( i = 0; i < keys.length; i++) {
//         single = await get_contact(keys[i]);
//         contacts.push(JSON.parse(single));
//     };

//     return contacts;
// }

// export const _get_contact = async(name) => {
//     let contact = '';
//     try {
//         contact = await AsyncStorage.getItem(name);
//     } catch(e) {
//         console.log("Error getting data: ", e.message);
//     }
//     return contact;
// }

// export async function _save_contact(contact) {
//     try {
//         await AsyncStorage.setItem(contact.name, JSON.stringify(contact));
//     } catch(e) {
//         console.log("Error saving data: ", e.message);
//     }
// }

// export async function _remove_contact(name) {
//     try {
//         await AsyncStorage.removeItem(name);
//     } catch(e) {
//         console.log("Error removing data: ", e.message);
//     }
// }

//  ------------ v1.0 - DEPRECATED
//  ------------ Contact service interacting directly with phone contacts

// export const get_contact_by_id = async (id) => {
//     if (get_permission() != 'granted') {
//         return -1;
//     } 
    
//     // Contacts.getContactByIdAsync(contactId: string, fields: FieldType[])
//     const data = await Contacts.getContactByIdAsync(id);
//     return data;
// }

// export const create_contact = async(contact) => {
//     if (get_permission() != 'granted') {
//         return -1;
//     } 
    
//     // const contact = {
//     //     [Contacts.Fields.FirstName]: 'Bird',
//     //     [Contacts.Fields.LastName]: 'Man',
//     //     [Contacts.Fields.Company]: 'Young Money',
//     // };
//     const id = await Contacts.addContactAsync(contact);
//     return id;
// }

// export const update_contact = async (contact) => {
//     if (get_permission() != 'granted') {
//         return -1;
//     } 
    
//     // const contact = {
//     //     id: '161A368D-D614-4A15-8DC6-665FDBCFAE55',
//     //     [Contacts.Fields.FirstName]: 'Drake',
//     //     [Contacts.Fields.Company]: 'Young Money',
//     //   };
//     if (Platform.OS == 'ios') {
//         await Contacts.updateContactAsync(contact)
//     } else {
//         await Contacts.presentFormAsync(contact.id, contact)
//     }
//     return contact.id;
// }

// export const delete_contact = async (id) => {
//     if (get_permission() != 'granted') {
//         return -1;
//     } 

//     if (Platform.OS == 'ios') {
//         await Contacts.removeContactAsync(id);
//     } else {
//         await Contacts.removeContactAsync(id);
//     }
// }
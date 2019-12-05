import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library'

const dir_contacts = FileSystem.documentDirectory + "conts/";


export async function save_contact(contact) {
    try {
        await FileSystem.makeDirectoryAsync(dir_contacts);
    } catch { console.log("Directory already exists.") }
    const path = dir_contacts + contact.name + '.json';
    await FileSystem.writeAsStringAsync(path, JSON.stringify(contact));
}

export const get_all_contacts = async () => {
    const contacts = [];
    const files = await FileSystem.readDirectoryAsync(dir_contacts);
    let single = '';

    for (i = 0; i < files.length; i++) {
        single = await get_contact(files[i]);
        contacts.push(JSON.parse(single));
    };
    return contacts;
}

export const get_contact = async (name) => {
    const contact = await FileSystem.readAsStringAsync(dir_contacts + name + '.json');
    return JSON.parse(contact);
}

export async function remove_contact() {
    try {
        await Filesystem.deleteAsync(dir_contacts + name + '.json');
    } catch (e) {
        console.log("Error: Directory/File does not exist " + e);
    }
}
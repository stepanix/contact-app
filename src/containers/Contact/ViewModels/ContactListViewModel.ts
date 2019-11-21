import { ContactModel } from "../Models/ContactModel";


export const getSortedContactList = (list: Array<ContactModel>) => {
    return list.sort((a: ContactModel, b: ContactModel) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1);
}

export const getContactsSelectedByKey = (list: Array<ContactModel>, key: string) => {
    let selectedContacts = list.filter((item: ContactModel) => item.name.last[0].toLowerCase() === key);
    return selectedContacts.sort((a: ContactModel, b: ContactModel) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1);
}

export const getCountOfContactsSelectedByKey = (list: Array<ContactModel>,key: string) => {
    return list.filter((item: ContactModel) => item.name.last[0].toLowerCase() === key).length;
}

export const convertToUpper = (data: string) => {
    return data.toUpperCase();
}

export const getContactCardPosition = (data: any) => {
    const posX =  data.left - (data.width / 5);
    const posY = data.top - data.height;
    const result = {
        x: posX,
        y: posY
    }
    return result;
}
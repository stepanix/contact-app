import { ContactModel } from "../Models/ContactModel";

export const getSortedContactList = (list: Array<ContactModel>) => {
    return list.sort((a: ContactModel, b: ContactModel) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1);
}

export const getContactsByKeySelected = (list: Array<ContactModel>, key: string) => {
    let selectedContacts = list.filter((item: ContactModel) => item.name.last[0].toLowerCase() === key);
    return selectedContacts.sort((a: ContactModel, b: ContactModel) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1);
}

// export const groupContactList = (list: Array<ContactModel>) => {
//     if (list.length > 0) {
//         let sorted = list.sort((a: ContactModel, b: ContactModel) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1);;
//         let uniqueIndex = 0;
//         let data = sorted.reduce((result, data) => {
            
//             let group = data.name.last[0].length === 1 && configJson.tabs.includes(data.name.last[0].toLowerCase()) ? data.name.last[0].toLowerCase() : null;
            
//             if (group) {
//                 if (!result[group]) {
//                     result[group] = { group, contactList: [data], count: 1 }
//                 } else {
//                     result[group].contactList.push(data);
//                     result[group].count += 1;
//                 }
//             }
            
//             return result;
//         }, {})
//         return Object.values(data);
//     }
//     return [];
// }

export const convertToUpper = (data: string) => {
    return data.toUpperCase();
}
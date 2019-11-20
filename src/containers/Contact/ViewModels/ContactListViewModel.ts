import { ContactModel } from "../Models/ContactModel";


export const groupContactList = (list: Array<ContactModel>) => {
    if (list.length > 0) {
        let sorted = list.sort((a: ContactModel, b: ContactModel) => a.last.toLowerCase() < b.last.toLowerCase() ? -1 : 1);;
        
        let data = sorted.reduce((r, e) => {
            // get first letter of name of current element
            let group = e.last[0];
            // if there is no property in accumulator with this letter create it
            if (!r[group]) {
                r[group] = { group, contactList: [e], count: 1}
            } else {
                // if there is push current element to children array for that letter
                r[group].contactList.push(e);
                r[group].count += 1;
            }
            // return accumulator
            return r;
        }, {})
        return Object.values(data);
    }
    return [];
}

export const convertToUpper = (data: string) => {
    return data.toUpperCase();
}
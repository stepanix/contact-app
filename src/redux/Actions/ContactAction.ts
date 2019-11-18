import { ActionModel } from "../../shared/Models/ActionModel";

export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_ERROR = 'GET_CONTACTS_ERROR';


export const getContacts = (): ActionModel => {
    return { type: GET_CONTACTS }
};

export const getContactsSuccess = (result: any) => {
    return { type: GET_CONTACTS_SUCCESS, payload: result}
};

export const getContactsError = (result: any) => {
    return { type: GET_CONTACTS_ERROR, payload: result}
};
import { ActionModel } from "../../shared/Models/ActionModel";
import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR
} from "../Actions/ContactAction";

export const initialContactState = {
    contactList: [],
    error: {}
};

export const contactReducer = (
    state: any = initialContactState,
    action: ActionModel
) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state };
        case GET_CONTACTS_SUCCESS:
            return { ...state, contactList: action.payload };
        case GET_CONTACTS_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
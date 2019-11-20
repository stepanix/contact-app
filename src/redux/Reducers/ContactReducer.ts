import { ActionModel } from "../../shared/Models/ActionModel";
import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR
} from "../Actions/ContactAction";

export const initialContactState = {
    contactList: [],
    error: {},
    isLoading: true
};

export const contactReducer = (
    state: any = initialContactState,
    action: ActionModel
) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, isLoading: true };
        case GET_CONTACTS_SUCCESS:
            return { ...state, contactList: action.payload, isLoading: false };
        case GET_CONTACTS_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};
import { ActionModel } from "../../shared/Models/ActionModel";
import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR
} from "../Actions/ContactAction";

export const initialContactState = {
    contacts: []
};

export const contactReducer = (
    state: any = initialContactState,
    action: ActionModel
) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state };
        case GET_CONTACTS_SUCCESS:
            return { ...state, contacts: action.payload.result };
        case GET_CONTACTS_ERROR:
            return { ...state, contacts: action.payload.result };
        default:
            return state;
    }
};
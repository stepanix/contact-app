import ContactStub from "../../shared/Stubs/ContactStub";
import * as fromContactReducer from './ContactReducer';
import { getContactsSuccess, getContactsError, getContacts } from "../Actions/ContactAction";
import { ActionModel } from "../../shared/Models/ActionModel";

describe('contactReducer', () => {

    const expected: any = {
        contactList: ContactStub,
        error: { error: 'error' },
        isLoading: false
    };

    it('should get default state', () => {
        const emptyAction: ActionModel = {type: ''};
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                emptyAction
            ).isLoading
        ).toEqual(true);
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                emptyAction
            ).contactList.length
        ).toEqual(0);
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                emptyAction
            ).error
        ).toBeTruthy();
    });

    it('should set isLoading to true', () => {
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                getContacts()
            ).isLoading
        ).toEqual(true);
    });

    it('should list contacts successfully and set isLoading to false', () => {
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                getContactsSuccess(ContactStub)
            ).contactList[0].name.first
        ).toEqual(expected.contactList[0].name.first);
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                getContactsSuccess(ContactStub)
            ).isLoading
        ).toEqual(expected.isLoading);
    });

    it('should reflect state when error is encountered and set isLoading to false', () => {
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                getContactsError({ error: 'error' })
            ).error.error
        ).toEqual(expected.error.error);
        expect(
            fromContactReducer.contactReducer(
                fromContactReducer.initialContactState,
                getContactsSuccess(ContactStub)
            ).isLoading
        ).toEqual(expected.isLoading);
    });
});
import ContactStub from "../../shared/Stubs/ContactStub";
import * as fromContactReducer from './ContactReducer';
import { getContactsSuccess, getContactsError } from "../Actions/ContactAction";

describe('contactReducer', () => {

    const expected: any = {
        contactList: ContactStub,
        error: { error: 'error' },
        isLoading: false
    };

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
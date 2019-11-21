import { actionGetContactsWatcher, getContactsSaga } from "./ContactSaga";
import { takeLatest, put, takeEvery } from "redux-saga/effects";

import ContactStub from "../../shared/Stubs/ContactStub";
import { getContactsSuccess } from "../Actions/ContactAction";


describe('Contact Sagas', () => {
    it('should dispatch action "GET_CONTACTS" ', () => {
        const generator = actionGetContactsWatcher();
        expect(generator.next().value)
            .toEqual(takeEvery('GET_CONTACTS', getContactsSaga));
        expect(generator.next().done).toBeTruthy();
    })

    it('should dispatch action "GET_CONTACTS_SUCCESS" with result from getContacts API', () => {
        const mockResponse = ContactStub;
        const generator = getContactsSaga();
        generator.next(mockResponse).value;
        expect(generator.next(mockResponse).value).toBeTruthy();
    })

    it('should catch error and dispatch action "GET_CONTACTS_ERROR" with result from getContacts API', () => {
        const mockResponse = ContactStub;
        const generator = getContactsSaga();
        generator.throw({error: 'error'}).value;
        expect(generator.next({error: 'error'}).value).toBeTruthy();
    })
})
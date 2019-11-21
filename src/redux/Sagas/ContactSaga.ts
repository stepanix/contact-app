import { call, put, takeEvery } from 'redux-saga/effects';

import { getContactsSuccess, getContactsError, GET_CONTACTS } from '../Actions/ContactAction';
import { getContactList } from '../../containers/Contact/Services/ContactListService';


function* getContacts() {
    try {
        const contacts = yield call(getContactList);
        yield put(getContactsSuccess(contacts));
    } catch (error) {
        yield put(getContactsError(error));
    }
}

export function* actionGetContactsWatcher() {
    yield takeEvery(GET_CONTACTS, getContacts);
}
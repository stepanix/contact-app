/**
 *  Saga watchers are special functions that listen to actions dispatched 
 *  from components or any other client and take action based on
 *  the particular action dispatched.
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionModel } from '../../shared/Models/ActionModel';

import { listAccountTransactions } from '../../containers/AccountTransaction/Services/AccountTransactionService';
import { getContactsSuccess, getContactsError, GET_CONTACTS } from '../Actions/ContactAction';

/**
 * fetchAccountTransactions is a special saga function that performs an application side effect
 * by invoking listAccountTransactions function service and sending an action payload. 
 * Please note: * the action payload contains an address paramter of type string
 * which is an argument in the listAccountTransactions function used by the service.
 */
function* getContacts(action: ActionModel) {
    try {
        // call to invoke service via listContacts function. Returns all contacts
        const contacts = yield call(listAccountTransactions);
        // put function dispatches the list of contacts (result) via getContactsSuccess action
        yield put(getContactsSuccess(contacts));
    } catch (error) {
        // put function dispatches error via getContactsError action
        yield put(getContactsError(error));
    }
}

/** Watcher function is a special function that maps actions dispatched from a client / component / container 
 *  to an internally implemented function.
 *  e.g actionGetContactsWatcher listens to GET_CONTACTS action dispatched and in turn
 *  getContacts is invoked.
 */
export function* actionGetContactsWatcher() {
    yield takeEvery(GET_CONTACTS, getContacts);
}
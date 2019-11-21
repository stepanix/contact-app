import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { getContactsSaga, actionGetContactsWatcher } from './ContactSaga';
import ContactStub from '../../shared/Stubs/ContactStub';
import { GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_ERROR } from '../Actions/ContactAction';
import { getContactList } from '../../containers/Contact/Services/ContactListService';
import { ActionModel } from '../../shared/Models/ActionModel';
import appWatcherSagas from '.';

describe('Contact Sagas', () => {

    const getContactAction = (): ActionModel => ({
        type: GET_CONTACTS
    });

   it('listen and react on GET_CONTACTS', () => {
        testSaga(actionGetContactsWatcher)
            .next()
            .takeEvery(GET_CONTACTS, getContactsSaga)
            .finish()
            .isDone()
    })

    it('provides a list of contacts after the getContactList API call', () => {
        return expectSaga(getContactsSaga)
            .provide({
                call(effect, next) {
                    if (effect.fn === getContactList) {
                        const id = effect.args[0];
                        return { results: ContactStub };
                    }

                    // Allow Redux Saga to handle other `call` effects
                    return next();
                },
            })
            .put({
                type: GET_CONTACTS_SUCCESS,
                payload: ContactStub,
            })
            .dispatch(getContactAction())
            .run();
    });

    it('should throw error in the saga after the getContactList API call', () => {
        const error = new Error('An error occurred...');

        return expectSaga(getContactsSaga)
            .provide({
                call(effect, next) {
                    if (effect.fn === getContactList) {
                        throw error;
                    }

                    // Allow Redux Saga to handle other `call` effects
                    return next();
                },
            })
            .put({ type: GET_CONTACTS_ERROR, payload: error })
            .dispatch(getContactAction())
            .run();
    });

})
import { ActionModel } from "../../shared/Models/ActionModel";
import { GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_ERROR } from "./ContactAction";
import ContactStub from "../../shared/Stubs/ContactStub";
import { ContactModel } from "../../containers/Contact/Models/ContactModel";


describe('Contact Actions', () => {

    const getContactAction = (): ActionModel => ({
        type: GET_CONTACTS
    });

    const getContactSuccessAction = (result: ContactModel[]): ActionModel => ({
        type: GET_CONTACTS_SUCCESS,
        payload: result
    });

    const getContactErrorAction = (result: any): ActionModel => ({
        type: GET_CONTACTS_ERROR,
        payload: result
    });

    it('should create a getContacts action', () => {
        const action = getContactAction();
        expect(action.type).toEqual(GET_CONTACTS);
    });

    it('should create a getContactsSuccess action', () => {
        const action = getContactSuccessAction(ContactStub);
        expect(action.type).toEqual(GET_CONTACTS_SUCCESS);
        expect(action.payload[0].name.first).toEqual(ContactStub[0].name.first);
    });

    it('should create a getContactsError action', () => {
        const action = getContactErrorAction({error: 'error'});
        expect(action.type).toEqual(GET_CONTACTS_ERROR);
        expect(action.payload.error).toEqual('error');
    })
});
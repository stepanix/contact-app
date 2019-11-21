import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getContactList } from './ContactListService';
import ContactStub from '../../../shared/Stubs/ContactStub';

describe('Contact Service', () => {   

    it('should call listTransactions and return a list of contacts', done => {
        const mock = new MockAdapter(axios);
        const mockData = {ContactStub};
       
        mock.onGet("https://api.randomuser.me?results=120").reply(200, mockData);

        getContactList().then((response: any) => {
            expect(response).toBeDefined();
            done();
        });
    });

});
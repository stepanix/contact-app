import axios from 'axios';
import { API_URL } from '../../../configs/environment.config';
import ContactStub from '../../../shared/Stubs/ContactStub';


export const getContactList = async () => {
    const endPoint = API_URL;
    // let res = await axios.get(endPoint);
    // return res.data.results;
    return await ContactStub;
};
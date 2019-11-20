import axios from 'axios';
import { API_URL } from '../../../configs/environment.config';


export const getContactList = async () => {
    const endPoint = API_URL;
    let res = await axios.get(endPoint);
    return res.data.results;
};
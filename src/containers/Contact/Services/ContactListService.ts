import axios from 'axios';
import { configJson } from '../../../configs/config';


export const getContactList = async () => {
    const endPoint = configJson.userUrl + '?results=' + configJson.numberCards;
    let res = await axios.get(endPoint);
    return res.data;
};
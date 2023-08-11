import axios from "axios";
import { todoApi } from '../../_constants/api.constant'
import { getToken } from "../../_helper/secureToken";
export async function getTodo() {
    const response = await axios.get(
        process.env.REACT_APP_AAVAZ_BIZ+todoApi.LIST,
        {
            // params:prarmTempObj,
            headers:{
                Authorization: getToken(),
            },
        }
    ).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        // handle error
        console.log(error);
        console.log(error.response);
        return error.response;
    });

    return response;
}
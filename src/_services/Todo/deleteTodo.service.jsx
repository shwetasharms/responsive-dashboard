import axios from "axios";
import { todoApi } from '../../_constants/api.constant'
import { getToken } from "../../_helper/secureToken";
export async function deleteTodo(dataId) {
    const response = await axios.delete(
        process.env.REACT_APP_AAVAZ_BIZ+todoApi.DELETE+dataId,
        {
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
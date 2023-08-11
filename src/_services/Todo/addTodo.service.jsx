import axios from "axios";
import { todoApi } from '../../_constants/api.constant'
import { getToken } from "../../_helper/secureToken";
export async function addTodo(data) {
    const response = await axios.post(
        process.env.REACT_APP_AAVAZ_BIZ+todoApi.CREATE,data,
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
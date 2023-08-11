import axios from "axios";
import { loginApi } from "../_constants/api.constant";

export async function login(data){
    // const response=await axios({
    //     method: 'post',
    //     url: process.env.REACT_APP_AAVAZ_BIZ+'api/login',
    //     data: data,
    //     }).then(function(response) {
        const response=await axios.post(
        // const promise= axios.post(
            process.env.REACT_APP_AAVAZ_BIZ+loginApi.LOGIN,
            data,
            ).then(function(response) {
              
          if(response.status==200)
          {
              localStorage.setItem("auth", JSON.stringify(response.data)); 
              
                // history.replace(from.pathname);
              //   history.replace(from);
              }
          else
          { 
            //   alert("Something Went Wrong, Not able to login")
            //   props.setLoggedin(false)
      
          }
          return response;
      }).catch(function (error) {
        // handle error
        console.log(error);
        console.log(error.response);
        return error.response;
      });

    //   const dataPromise = promise.then((response) => response.data)

      // return it
    //   return dataPromise
    return response;
}
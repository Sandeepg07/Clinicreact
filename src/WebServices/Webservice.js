import axios from "axios";

 class WebServie{
    postApi(url,data){
        return axios.post(url,data);
    }
    
    getApi(url,data){
        return axios.get(url,data);
    }

    Getapiwtoken(url,token){
        return axios.get(url,{
            headers :{
                authorization:"Bearer " + token,
            },
        });
    }
    Postapiwtoken(url,data,token){
        return axios.post(url,data,{
            headers:{
                authorization:"Bearer " + token,
            }
        });
    }

    putmethodwtoken(url,data,token){
        return axios.put(url, data, {
            headers:{
                authorization:"Bearer " + token,
            }
        });
    }
    deletwithtoken(url,token){
        return axios.delete(url, {
            headers:{
                authorization:"Bearer " + token,
            }
        });
    }

 }
 export default new WebServie();
import axios from "axios";

export default function apiRequests(method,endpoint, data,headers ={}){ 
    const defaultHEader = {
        Verified : "uniqueVerif" 
    }
    return axios({
        url:`https://fakestoreapi.com/products${{ endpoint }}`,
        method,
        data,
        headers : {... defaultHEader,...headers}

})
}
import axios from "axios"
import Header from "../Components/Header";
const baseUrl = "http://localhost:5630/api";
const api = axios.create({
baseURL:baseUrl
})


export const postUrls = async(urlList)=>{
    return  await api.post("/indexResults",{url:urlList},{
        headers:{
            "content-type":"application/json"
        }
       
    }).catch((err)=>{
        return err.response
    });

}
import axios from "axios"
import Header from "../Components/Header";
const baseUrl = "https://indexcheckerr-be.vercel.app/api";
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
import { useState } from "react";
import toast,{Toaster} from "react-hot-toast";
import { postUrls } from "../api/api";
import Table from "./Table";
import { HttpStatusCode } from "axios";
const Form =({handleData})=>{
    const [url,setUrl]=useState("");
    const [result,setResult]=useState([]);
    const[loading,setLoading]=useState(false);
    const handleSubmit =async ()=>{
      try {
        if(url.length===0){
          toast.error("Please enter url")
          console.log("enter url")
      }
      else {
         setLoading(true);
          const result = await postUrls(url);
        if(result.status===HttpStatusCode.Ok){
          result.data.map((data)=>{
            console.log(data.url,data.result)
           })
           setResult(result.data);
           handleData(result.data);
           setLoading(false);

        }
        else  {
          console.log("status 200 değil")
         
          throw new Error(result)
        }
         
      }
      }
      catch(err){
        console.log("hatayı yakalım",err)
        toast.error("!"+err)
        setLoading(false);
      }
       
       
       
    }
    return(
        <>
      
  <div class="space-y-4 px-8 py-10">
    <Toaster />
    <label class="block" for="name">
      <p class="text-gray-600">Url(Each Domain must be on separate with comma ",")</p>
      <textarea 
      class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" 
      type="text" 
      placeholder="Please Enter Url with  https://www or http://www"
      value={url}
      onChange={(e)=>setUrl(e.target.value)}
      ></textarea>
    </label>
    <button 
    class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white"
    onClick={()=>handleSubmit()}
    visible={loading}
    >{
        loading?"Proccessing...":"Submit"
    }</button>
  </div>

  
  </>

    )
}
export default Form;
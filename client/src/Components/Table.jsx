import { useEffect, useState } from "react";

const Table = ({data})=>{
    const [dat,setData]=useState(data);
    const [visible,setVisible]=useState(
        "min-w-full border-collapse border-spacing-y-2 border-spacing-x-2 hidden"
    )
   useEffect(()=>{
    console.log("this is table comp. data is",data);
    setData(data);
    if(data.length>0){
        
        setVisible(
            "min-w-full border-collapse border-spacing-y-2 border-spacing-x-2"
        )
    }
   
   },[data])
    return(
        <>
<div class=" bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-2 py-10">
    
    <div class="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
      <table class={visible} >
        <thead class=" hidden text-left  border-b lg:table-header-group">
          <tr class="">
           

            <td class="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-3">#</td>
            <td class="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-3">Url</td>
            <td class="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-3">Google</td>
            <td class="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-3">Bing</td>
          </tr>
        </thead>

        <tbody class="bg-white lg:border-gray-300 text-center">
     {
         dat.map((dt,index,key)=>(
            <tr class="">
           

            
            <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{index+1}</td>
            <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{dt.url}</td>
            {dt.result.google?(
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-green-600 sm:px-3 lg:table-cell lg:text-left">indexed</td>

            ):(
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-red-600 sm:px-3 lg:table-cell lg:text-left">Not Indexed</td>
            )}

            {dt.result.bind?(
                 <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-green-600 sm:px-3 lg:table-cell lg:text-left">indexed</td>
            ):(
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-red-600 sm:px-3 lg:table-cell lg:text-left">Not indexed</td>
            )

            }
            
           
          </tr>

         
       
    ))
     }
     
       {/* {
        dat.count>0?
    
            dat.map((dt,index)=>(
                <tr class="">
               
    
                
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{index}</td>
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{dat.url}</td>
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{dat.result.google}</td>
                <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{dat.result.bing}</td>
              </tr>
    
             
           
        )):(
            <tr class="">
               
    
                
            <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">"asd"</td>
            <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">"aSD"</td>
            <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">"ASDASD"</td>
            <td class="whitespace-no-wrap hidden py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">"ASDASD"</td>
          </tr>
        )
    } */}
         
         
        </tbody>
      </table>
    </div>
  </div>
</div>

</>
    )

}

export default Table;
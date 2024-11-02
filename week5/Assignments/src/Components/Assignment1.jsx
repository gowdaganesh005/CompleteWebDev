import { useMemo, useState } from "react"


function Assignment1(){
    
    const [input,setinput]=useState(0);
    const factorial=useMemo(function(){
        let ans=1;
        for(let x=1;x<=input;x++){
            ans=ans*x;
    
        }
        console.log("factorial ran")
        return ans
    },[input])
    return(
        <>
        <input
        type="number" 
        onChange={(e)=>setinput(Number(e.target.value))}
        ></input>

        <div>Calulated factorial {factorial}</div>
        
        </>
    )
}

export default Assignment1
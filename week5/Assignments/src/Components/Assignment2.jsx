import { useMemo, useState } from "react"

const words=["he","him","random","elephant","dragonite","charmander","meta","garden"];
let all_words=[]
for(let i=0;i<50;i++){
    let curSent=""
    for(let j=0;j<10;j++){
        curSent=`${curSent} ${words[Math.floor(Math.random()*words.length)]}`
    }
    all_words.push(curSent)
    
}
// console.log(all_words)


function Assignment2(){
    const [input,setInput]=useState("");
    const [sentence,setSentences]=useState(all_words)

    const filtered=useMemo(()=>sentence.filter((x)=>x.includes(input)),[input,sentence])
    // const ans=[10,20,30].reduce((prev,curr)=>prev+curr)
    // console.log(ans)  easier way to callute sums or products or some value calculations the prev is carried from the previous calculations which is passed on to all the further elements
    




    return(

        
        <>
        <input type="text" 
        onChange={(e)=>{
            setInput(e.target.value)
            
            
        
        }}
        />
        {filtered.map((sent)=>(<div>{sent}</div>))}

        
        
        </>
    )

}
export default Assignment2
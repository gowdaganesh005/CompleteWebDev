import { createClient } from "redis";

const client=createClient()

const connect=async ()=>{await client.connect()}
connect()

const serve=async()=>{
while(1){
    const response=await client.brPop("submissions",0)
    await new Promise((resolve)=>setTimeout(resolve,1000))
    console.log("processed the respone :",response)
}
}
serve()
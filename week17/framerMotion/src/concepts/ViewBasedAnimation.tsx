import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function(){
    const ref=useRef(null);
    const isInView=useInView(ref, {once:true});


    return(
        <>
        <div className="h-[190vh]  justify-center items-end ">
            <div className="h-[900px]"></div>
        
            <motion.div
                initial={{
                    opacity:0
                }}
                whileInView={{
                    opacity:1,
                    
                }}
                transition={{
                    duration:2
                }}
                className="w-full h-[800px] bg-blue-950">

            </motion.div>
            <div ref={ref}
                className={`w-full h-[800px] transition-colors duration-[3000ms] ${isInView ?'bg-green-600':'bg-yellow-500'} `}></div>
        </div>
        
        </>
    )
}
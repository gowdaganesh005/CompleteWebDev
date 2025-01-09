import { motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react'
export default function(){
    const [visible,setVisilble]=useState(true)
    return(
        <>
         <div className='flex w-full h-[100%vh] justify-center items-center'>
    <AnimatePresence mode='popLayout'>
      {
        visible && 
        <motion.div 
        initial={{
          rotate:"0deg",
          scale:0
        }}
        animate={{
          rotate:"360deg",
          scale:1,
          y: [0,-10,-120,100,0],
        }}
        transition={{
          duration:1,
          times:[0,0.25,0.9,0.96,1],
          
        }}
        exit={{
          rotate:'0deg',
          scale:0
        }}
        
        className='w-40 h-40 bg-blue-800'>
        
      </motion.div>
      
      }</AnimatePresence>
      
    </div>
    <div className='h-20'></div>
    <motion.button
      className="bg-blue-950 text-gray-200 p-3 rounded"
      layout
      onClick={()=>setVisilble(!visible) }>show /hide</motion.button>
    
        </>
    )
}
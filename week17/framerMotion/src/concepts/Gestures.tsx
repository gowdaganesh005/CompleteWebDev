import {motion ,MotionConfig} from "framer-motion"
export default function(){

    return(
        <>
        <MotionConfig 
            transition={{duration:5}}>
            <div className="w-full h-screen flex justify-center items-center">
                <motion.button 
                    whileHover={{
                        scale:1.05,
                        rotate:"30deg"
                    }}
                    // whileInView={{
                    //     scale:0.9,
                    //     rotate:"-3deg"
                    // }}
                    whileTap={{
                        scale:1.5,
                        rotate:"180deg"
                    }}
                    
                    className="w-40  p-2 bg-indigo-800 text-gray-200 rounded text-2xl">
                        Click Me
                </motion.button>
                <motion.button 
                    whileHover={{
                        scale:1.05,
                        rotate:"30deg"
                    }}
                    // whileInView={{
                    //     scale:0.9,
                    //     rotate:"-3deg"
                    // }}
                    whileTap={{
                        scale:1.5,
                        rotate:"180deg"
                    }}
                    
                    className="w-40  p-2 bg-green-800 text-gray-200 rounded text-2xl">
                        Click Me
                </motion.button>
            </div>
        </MotionConfig>
        </>
    )
}
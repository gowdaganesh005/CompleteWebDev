import { inertia, motion,useAnimationControls } from "framer-motion";
export default function(){
    const contorls=useAnimationControls()
    function handleClick(){
        contorls.start("flip")
    }
    return(
        <>
        <div className="w-full h-screen flex items-center justify-center">
            <div>
                <button
                    onClick={handleClick}
                     className="p-3 bg-blue-950 text-2xl text-gray-200 rounded font-bold">
                        Flip it
                </button>
                <motion.div 
                    variants={{
                        initial:{
                            scale:1,
                            rotateY:"0deg"
                        },
                        flip:{
                            scale:1.1,
                            rotateY:"360deg"
                        }
                    }}
                    initial="initial"
                    animate={contorls}
                    className="w-60 h-60 m-4 bg-gray-800"></motion.div>
        </div>
        </div>
        </>
    )
}
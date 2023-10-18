'use client'
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

export default function ({children}) {
    const pathName = usePathname()
    console.log(pathName)
    return  (
     <AnimatePresence mode={"wait"}>
         <motion.div  key={pathName}>
             <motion.div
                 initial={{ scaleX: 1 }}
                 animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                 exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                 className="privacy-screen"
             >
                 {children}
             </motion.div>
         </motion.div>
     </AnimatePresence>


    )

}
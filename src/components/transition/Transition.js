'use client'
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

export default function TransitionCustom({children}) {
    const pathName = usePathname()
    return  (
     <AnimatePresence  mode={"wait"}>
         <motion.div className={''} key={pathName}>
             {children}


         </motion.div>


     </AnimatePresence>


    )

}
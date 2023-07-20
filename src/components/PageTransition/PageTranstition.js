'use client'
import {AnimatePresence, motion} from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <AnimatePresence mode={"wait"}>
            {children}
        </AnimatePresence>
    );
};

export default PageTransition;
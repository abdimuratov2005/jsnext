'use client'
import React, {useContext, useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {guideSVG} from "@/components/SVGs/guide";

function Popup({children}) {

    const { isPopupActive, setPopup } = useContext(DataDevelopContext);

    function handlePopup () {
        setPopup(prevState => !prevState)
    }

    useEffect(() => {
        hiddenScrollBody()
    }, [isPopupActive])

    function hiddenScrollBody() {
        if (!isPopupActive) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    return (

        <AnimatePresence>
            {
                isPopupActive && (
                    <motion.div
                        initial={{opacity: 0, clipPath: 'circle(0% at 50% 50%)'}}
                        animate={{opacity: 1, clipPath: 'circle(100% at 50% 50%)'}}
                        exit={{opacity: 0, clipPath: 'circle(0% at 50% 50%)'}}
                        transition={{duration: 0.5}}
                        style={{backdropFilter: 'blur(5px)'}}
                        className=' z-40 mx-auto fixed top-0 left-0 right-0 w-screen h-screen overflow-auto'>
                        <div className='z-40 w-[1024px] m-auto absolute top-0 left-0 right-0 bottom-0  h-[50vh]'>
                            <button className='text-amber-50 right-[30px] absolute top-[-80px]' onClick={handlePopup}>
                                {guideSVG.crossWhite}
                            </button>
                            <div
                                className="overflow-auto h-[600px] develop-step-wrapper w-full  bg-whitefone-mapbiz py-10 px-10 flex flex-col justify-between rounded-[35px] relative ">
                                {children}
                            </div>

                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
}

export default Popup;
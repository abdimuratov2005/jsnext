'use client'
import React, {useContext, useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {guideSVG} from "@/components/SVGs/guide";
import axios from "axios";

export default function PortfolioPopup() {

    const [data, setData] = useState([]);

    async function getPartners() {
        const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/partners/';
        try {
            const res = await axios.get(url);
            setData(res.data.fields.portfolio_table);

        } catch (error) {
            console.log(error);
        }
    }

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

    useEffect(() => {
        getPartners()
    }, [])

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
                                <h2 className="text-2xl font-medium">
                                    Работали разное, работали много, у каждого проекта
                                    свой бюджет и задача.
                                </h2>
                                <p className="text-xl w-[70%]">
                                    Представленый перечень не исчерпывающий, тут только те
                                    кто запечатлен в нашем пергаменте истории) Некоторые
                                    работы, к сожалению были преданы забвению.
                                </p>
                                <div className="h-[60%] overflow-auto">
                                    <table className="border-collapse w-full select-none">

                                        {data && data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-4 py-2 border-2 border-redbright-mapbiz">{ item.date }</td>
                                                    <td className="px-4 py-2 border-2 border-redbright-mapbiz">{ item.service }</td>
                                                    <td className="px-4 py-2 border-2 border-redbright-mapbiz">{ item.title }</td>
                                                </tr>
                                            )
                                        })}

                                    </table>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
}
'use client'
import {useState} from "react";
import {disabledTabsButton} from "@/components/Tabs/disabledTabsButton";
import {ActiveButton} from "@/components/Tabs/ActiveButton";
import {arrowTab, ArrowTabNext} from '@/components/Tabs/Arrow'
import Link from "next/link";

function Tabs({descr, task, client, pages}) {
    const {next, prev} = pages
    const [selectedButton, setSelectedButton] = useState("task");
    const activeClass = '[text-shadow:_0_0px_2px_#00FFE5] text-tabs'
    const disabledClass = 'text-tabs'
    return (
        <div className={'h-full flex flex-col justify-center'}>
            <div className={`flex w-full justify-between`}>
                <button onClick={() => setSelectedButton("task")} key={''}
                        className={selectedButton === "task" ? activeClass : disabledClass}>
                    Задача
                    {selectedButton === "task" ? ActiveButton : disabledTabsButton}
                </button>
                <button className={selectedButton === "client" ? activeClass : disabledClass}
                        onClick={() => setSelectedButton("client")}>
                    Клиент
                    {selectedButton === "client" ? ActiveButton : disabledTabsButton}
                </button>
                <button className={selectedButton === "description" ? activeClass : disabledClass}
                        onClick={() => setSelectedButton("description")}>
                    Описание
                    {selectedButton === "description" ? ActiveButton : disabledTabsButton}
                </button>
            </div>
            <div
                dangerouslySetInnerHTML={selectedButton === 'description' && {__html: descr} || selectedButton === 'task' && {__html: task} || selectedButton === 'client' && {__html: client}}
                className="text-[14px] max-w-[440px] text-white develop-step-content text-[1.2rem] h-[500px] ">
            </div>
            <div className={`flex justify-between items-center`}>
                <Link href={`/portfolio/${next}`}>{arrowTab}</Link>
                <Link className={'flex  items-center'} href={`/portfolio/${prev}`}><span className={'max-w-[100px] text-center text-[14px] text-white font-light mr-3'}>Следующий проект</span> {ArrowTabNext}</Link>
            </div>

        </div>
    );
}

export default Tabs;
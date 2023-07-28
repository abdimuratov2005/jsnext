'use client'
import {useState} from "react";

export default function Quiz({isOpenQuiz}) {

    const [step, setStep] = useState(undefined)


    return (
        isOpenQuiz &&
        <div className={`fixed m-auto w-full h-full flex  items-center justify-center `}>
            <div className={'w-[745px] h-[550px] bg-gray-400 bg-center'}>
                <button>Назад</button>
                <button>Далее</button>
            </div>
        </div>
    )
}
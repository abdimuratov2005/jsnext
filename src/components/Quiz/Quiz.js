'use client'
import styles from './Styles.module.scss'
import {useEffect, useState} from "react";
import FormQuiz from "@/components/Quiz/FormQuiz";
import axios from "axios";

export default function Quiz({isOpenQuiz}) {

    const [currentData, setCurrentData] = useState()
    const [route, setRoute] = useState("/quiz")
    const [previousRoutes, setPreviousRoutes] = useState([]);

    async function getData(route) {
        const url = `https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1${route}`;
        try {
            const response = await axios.get(url);
            return response.data.fields; // Возвращаем данные из промиса
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(route);
            setCurrentData(data); // Сохраняем полученные данные в состояние
            console.log(data)
        };

        fetchData(); // Вызываем асинхронную функцию внутри useEffect
    }, [route]);


    const handleGoBack = (link) => {
        setRoute(link)
    };

    const handlePostData = (data) => {
        console.log(data)
    }

    const [step, setStep] = useState(undefined)
    const {title, subtitle, content, next, prev} = currentData || {};
    const {checkroutes, radio, checkboxes, inputs, finish} = content || {}

    const handleNext = (link) => {
        console.log(link)
        setRoute(link)
    }

    const handleRoute = (route) => {
        // При добавлении нового рута, сохраняем текущий route в стек предыдущих рутов
        setPreviousRoutes((prevRoutes) => [...prevRoutes, route, '/quiz']);
        setRoute(route)
    }
    return (
        isOpenQuiz &&
        <div className={`fixed m-auto w-full h-full flex  items-center justify-center bg-[#1E1E1E]`}>
            <div className={'w-[745px] h-[550px] bg-center '}>
                <div className={`${styles.titleBlock} flex justify-center items-center `}>
                    <p className={`text-[20px]`}>{title}</p>
                </div>
                <p className={'text-white text-[23px] font-medium'}>{subtitle}</p>
                <FormQuiz isPost={handlePostData} checkroutes={checkroutes} radio={radio} title={title} checkboxes={checkboxes} inputs={inputs} finish={finish} onRoute={handleRoute} />
                {route !== '/quiz' && <button onClick={() => {
                    handleGoBack(prev)
                }}>Назад</button>}
                {finish === false &&
                    <button onClick={() => {
                    handleNext(next)
                }}>Далее
                </button>}
            </div>
        </div>
    )
}
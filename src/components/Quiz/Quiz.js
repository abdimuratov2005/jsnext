'use client'
import styles from './Styles.module.scss'
import {useEffect, useState} from "react";
import FormQuiz from "@/components/Quiz/FormQuiz";
import axios from "axios";
import Image from "next/image";
import ButtonBgImage from "@/components/ButtonBgImage/ButtonBgImage";

export default function Quiz({isOpenQuiz, isClose}) {

    const arrayBack = <svg xmlns="http://www.w3.org/2000/svg" width="41" height="20" viewBox="0 0 41 20" fill="none">
        <path d="M22.2666 10.0649C27.1557 10.0999 32.0448 10.1279 36.934 10.1752C37.9085 10.1849 38.8843 10.2525 39.8549 10.3369C40.0155 10.3523 40.167 10.4103 40.2898 10.5031C40.4125 10.596 40.5007 10.7194 40.5428 10.8573C40.6225 11.0781 40.3454 11.3913 40.0145 11.4373C39.6935 11.4819 39.3742 11.5512 39.0516 11.5684C36.9916 11.6788 34.9317 11.835 32.8697 11.868C28.6334 11.9353 24.3958 11.9523 20.1586 11.9566C16.1386 11.9607 12.1183 11.9162 8.0983 11.908C7.45281 11.9066 6.80697 11.9785 6.16256 12.0295C6.1198 12.0388 6.08038 12.0575 6.04791 12.0838C6.01544 12.1101 5.99098 12.1432 5.97676 12.1801C5.96517 12.2681 5.99458 12.4166 6.06073 12.4482C7.29607 13.042 8.51627 13.6668 9.78656 14.1969C12.7417 15.4299 15.5139 16.9419 18.2842 18.459C18.7394 18.7083 19.2166 18.9616 19.4002 19.4563C19.4336 19.5463 19.4856 19.7005 19.4432 19.7306C19.2912 19.856 19.1065 19.9461 18.9056 19.9929C18.6916 20.0152 18.4748 19.9846 18.2794 19.9043C17.5872 19.627 16.8999 19.3377 16.2265 19.0267C11.413 16.8041 6.60102 14.579 1.79052 12.3515C-0.026474 11.5157 -0.88987 10.7053 1.29124 8.86761C1.91961 8.3379 2.55529 7.80899 3.23859 7.33795C6.40754 5.1512 9.58809 2.97782 12.7802 0.817774C13.2191 0.539204 13.6819 0.291378 14.1645 0.076582C14.4792 -0.0744934 14.7943 0.0150852 15.066 0.19628C15.365 0.395767 15.5507 0.975618 15.4476 1.23062C15.2185 1.79675 14.762 2.21213 14.2718 2.58824C12.3843 4.03622 10.4868 5.4738 8.57921 6.90097C7.33959 7.8336 6.08696 8.7525 4.84929 9.68702C4.78813 9.73307 4.78509 9.87625 4.80987 9.96235C4.82614 9.99962 4.85238 10.0328 4.88636 10.0591C4.92034 10.0855 4.96103 10.1041 5.00494 10.1134C5.65186 10.151 6.29985 10.1987 6.9473 10.1957C12.0539 10.1719 17.1605 10.1421 22.2671 10.1065L22.2666 10.0649Z" fill="white" fill-opacity="0.8"/>
    </svg>


    const [currentData, setCurrentData] = useState()
    const [route, setRoute] = useState("/quiz")
    const [previousRoutes, setPreviousRoutes] = useState([]);
    const [isThanks, setIsThanks] = useState(false)

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
        setIsThanks(true)
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
        <div className={`fixed m-auto w-full h-full flex  items-center justify-center bg-[#1E1E1E] z-50`}>
            <button onClick={() => {
                isClose(false)
            }} className={'absolute top-[20px] z-50 right-[40px] '}>Закрыть</button>
            <div className={`max-w-[1280px] w-full flex justify-between`}>
                <Image src={'/img/burger.png'} width={357} height={360} alt={'rfhnbyrf'}></Image>
                <div className={'w-[745px] h-[550px] bg-center '}>
                    <div className={`${styles.titleBlock} flex justify-center items-center `}>
                        <p className={`text-[20px]`}>{finish === false ? title : 'Ну и терпение) Отличная работа'}</p>
                    </div>
                    <p className={'text-white text-[23px] font-medium mt-[20px] mb-[40px]'}>{subtitle}</p>
                    <FormQuiz isPost={handlePostData} checkroutes={checkroutes} radio={radio} title={title}
                              checkboxes={checkboxes} inputs={inputs} finish={finish} thanks={isThanks}
                              onRoute={handleRoute}/>
                    <div className={'flex justify-between items-center'}>
                    {!isThanks && route !== '/quiz' && <button onClick={() => {
                        handleGoBack(prev)
                    }}>{arrayBack}</button>}

                    {route !== '/quiz' &&
                        finish === false &&
                        <ButtonBgImage isValid={true} type={'button'} text={'далее'}  click={() => {
                            handleNext(next)}
                        }/>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
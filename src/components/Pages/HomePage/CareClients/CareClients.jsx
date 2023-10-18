'use client'
import styles from './CareClents.module.scss'
import {useContext, useState} from "react";
export  default function CareClients(props) {
    const [data, setData] = useState()
    const [selectButton, setSelectButton] = useState(0)
    const [showInfo, setShowInfo] = useState(false)


    const prevSlide = () => {
            setSelectButton(prevState => prevState - 1)
    }
    const nextSlide = () => {
            setSelectButton(prevState => prevState + 1)
    }

    const showInfoFalse = () => {
        setShowInfo(showInfo => showInfo = false)
    }

    const links = [
        {
            title: 'Начало',
            subtitle: 'Начало общения',
            description:
                'При обращении к нам мы знакомимся с заказчиком, продуктом и итоговой целью. Делаем анализ исходных данных и собираем недостающие данные для составления правильного комплекса ресурсов. Далее, если имеем экспертизу в вашем вопросе - предлагаем возможные варианты достижения цели.',
            id: 1
        },
        {
            title: 'Оформление',
            subtitle: 'Оформление',
            description: 'После того как мы определили объём и нюансы работ, сформировали техническое задание и сроки выполния - фиксируем все в договоре. Фиксируем счета и по итогу закрывающие документы.',
            id: 2
        },
        {
            title: 'Процесс',
            subtitle: 'Рабочий процесс',
            description: 'Обычно делаем рабочую группу WhatsApp, Telegram или другой удобный заказчику ресурс - туда включаем всех тех кто будет учавствовать в работе с вами + продукт менеджер для контроля. Создаем цифровую доску для отражения процесса и заметок. Общение в свободном формате с командой ежедневно, онлайн.',
            id: 3
        },
        {
            title: 'Стоимость',
            subtitle: 'Ценообразование',
            description: 'После того как мы определились с объеом работ составляется график работ и смета рабочих часов специалистов, от которой и зависит итоговая стоимость разработки, либо другой услуги. Чем сложнее задаче, тем больше стоимость часа. Чкм объяемней работа, тем больше рабочих часов нужно. Все справедливо.',
            id: 4
        },
        {
            title: 'Гарантии',
            subtitle: 'Гарантии',
            description: 'Мы документально берем на себя ответственность за сроки, качество и функционал. В случае разработки - утверждаем дизайн проект. В случае рекламы или продвижения - фиксируем задачи и план работ - ему следуем, отчитуемся и обнажаем проблемные моменты. Гарантий в виде количества обращений в месяц не даем - не мошенники.',
            id: 5
        },
        {
            title: 'Отчетность',
            subtitle: 'Отчетность',
            description: 'В ходе сотрудничества мы предоставляем переодическую отчетность о проделанной работе, трудностях и успехах. Переодичность и форма зависит от типа и нюансов работ. Помимо этого, всегда с вами на связи ваш продукт менеджер, который является неким “переводчиком на человеческий язык” происходящего.',
            id: 6
        },
        {
            title: 'Оплата',
            subtitle: 'Оплата',
            description: 'Мы работаем официально и можем указать в договоре любой вид оплаты по согласованию сторон. При без нал оплате даем закрывающие документы (в - расход можно оформить). Не работаем без предоплаты или по форме - “делай, а потом заплачу”. Но наши услуги можем оформить рассрочку гражданам РФ.',
            id: 7
        },
        {
            title: 'Результат',
            subtitle: 'Результативность',
            description: 'Для каждой работы есть свой инструмент. Так и для каждой рабочей схемы развития есть свой набор мнструментов интернет маркетинга. Важно правильно составить этот набор. Спланировать этапы развития и реализовать. Для этого и нужны веб студии.',
            id: 8
        },
    ]


    return (
        <div
            className="foryou max-w-screen-xl mx-auto pl-6 2xl:pl-0 pr-4 2xl:pr-0 pt-4 2xl:pt-24 2xl:pb-56 flex justify-end font-grotesk">
            <div className="w-full 2xl:w-11/12 grid gap-y-4 2xl:gap-y-24">
                <h2 className="text-base 2xl:text-6xl 2xl:leading-[5.5rem] text-white-text-new-mapbiz pb-[45px] md:pb-0">
                    Забота о клиенте
                </h2>
                <div className="md:grid-cols-2 grid 2xl:grid-cols-2">
                    <div className="">
                        <div
                            className="w-full 2xl:w-[85%] text-sm 2xl:text-2xl 2xl:leading-9 text-white-text-new-mapbiz">
                            Уважая ваше время, для тех кому нужны нюансы ниже сделали сноски, кому
                            это пока не интересно удобно проскролить 1 экран)
                        </div>
                        <div
                            className="foryou-nav mt-6 flex flex-wrap gap-x-2.5 2xl:gap-x-4 gap-y-3 2xl:gap-y-5  leading-[0.5rem] text-[6.5px] 2xl:text-sm text-grey-mapbiz pb-[50px] md:pb-0">
                            {links.map((item) => {
                                return <button key={item.id} onClick={() => {
                                                    setSelectButton(item.id)
                                                    setShowInfo(true)
                                                }}
                                               className={`foryou-nav__el px-2.5 2xl:px-4 py-[0.3rem] text-base 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px]  transition duration-300 hover:bg-white hover:shadow-white-mapbiz ${selectButton === item.id ? 'bg-white shadow-white-mapbiz' : ''} `}
                                               >{item.title}</button>
                            })}
                        </div>
                    </div>
                    {showInfo &&
                        <div className="pt-4 2xl:pt-0 flex flex-start md:justify-end  md:h-[265px] 2xl:h-[530px]">
                            {
                                showInfo ? '' : <div style={ {backgroundImage: 'url(/img/home/first.png)'} }
                                                     className={`${styles.image}   w-full 2xl:w-[90%] h-full bg-center bg-cover bg-no-repeat`}
                                />
                            }
                            {showInfo ? links.map((item,index) => {
                                if (item.id === selectButton) {
                                    return (
                                        <div
                                            style={ {backgroundImage: 'url(/img/home/img.png)'} } key={index}
                                            className={`${styles.image__slider} w-[400px]  h-[380px]  md:h-[528px] md:w-[528px]  relative  flex flex-col justify-center box-border`}>
                                            <div
                                                onClick={showInfoFalse}
                                                className="foryou-toggle__close absolute top-12 right-12 cursor-pointer z-20">
                                                <svg className="w-4 2xl:w-8 h-4 2xl:h-8" width="30" height="30"
                                                     viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.3226 17.9674C11.7133 20.3402 9.16172 22.6385 6.63565 24.9654C5.17224 26.3134 3.76123 27.7199 2.30123 29.0716C1.91237 29.4408 1.46552 29.7409 0.979126 29.9595C0.739275 30.0618 0.221335 29.9595 0.103217 29.7722C-0.0530674 29.5234 -0.00686019 29.082 0.0779113 28.7574C0.139582 28.5207 0.390682 28.3248 0.580112 28.1348C4.18256 24.5318 7.78667 20.9312 11.3923 17.3329C11.7969 16.9293 12.2131 16.538 12.6779 16.0898C11.1022 14.316 9.52409 12.6043 8.01749 10.829C5.61295 7.99437 3.25666 5.11755 0.880452 2.25835C0.794073 2.15444 0.71977 2.04071 0.632588 1.9368C0.216766 1.43749 -0.0763915 0.899327 0.397083 0.293654C0.751637 -0.159833 1.59922 -0.0921009 2.18941 0.524822C3.65925 2.06079 5.09106 3.63397 6.51089 5.21923C9.10345 8.11218 11.6758 11.024 14.2591 13.9255C14.3697 14.031 14.4873 14.1287 14.611 14.2178C16.6086 12.2784 18.584 10.3454 20.5759 8.42901C22.8861 6.2076 25.2043 3.99493 27.5306 1.79097C28.4033 0.962547 29.103 0.813227 29.6385 1.29658C30.1935 1.79732 30.1418 2.6339 29.2568 3.53085C26.8639 5.9562 24.4132 8.32265 21.9648 10.6917C20.0997 12.4971 18.2047 14.2714 16.2196 16.1571C17.8327 17.8518 19.3755 19.541 20.993 21.152C22.5466 22.6994 24.187 24.1571 25.7712 25.6726C26.3905 26.2429 26.9704 26.856 27.5069 27.5076C27.9396 28.0543 28.0035 28.733 27.4716 29.2722C26.9475 29.8041 26.3406 29.6161 25.835 29.2136C24.8679 28.4836 23.9408 27.7001 23.058 26.8667C20.3556 24.1783 17.7008 21.4406 15.0287 18.7207C14.8174 18.506 14.6154 18.2806 14.3226 17.9674Z"
                                                        fill="white" fill-opacity="0.8"/>
                                                </svg>
                                            </div>
                                            <div className="h-full px-9 py-16">
                                                <h2  className="text-whitelink-mapbiz foryou-el__title text-[11px] 2xl:text-2xl leading-7 ">
                                                    {item.subtitle}
                                                </h2>
                                                <p className="text-whitelink-mapbiz foryou-el__content font-light mt-2 2xl:mt-6 text-[11px] 2xl:text-xl">
                                                    {item.description}
                                                </p>
                                            </div>
                                            {selectButton ? <div className={`${styles.buttons} ${selectButton == 1 ? 'justify-end' : 'justify-between' }`}>
                                                {selectButton >= 2 ? <button className={styles.button__slider} onClick={prevSlide}></button> : ''}
                                                {selectButton < links.length ? <button className={styles.button__slider_right} onClick={nextSlide}></button> : ''}

                                            </div> : ''}
                                        </div>
                                    )
                                }
                            }) : '' }
                        </div>
                    }

                </div>
            </div>
        </div>

    );
}


'use client'
import React, {useState} from 'react';
import styles from './CareClents.module.scss'
import Link from "next/link";

function CareClients(props) {
    const [data, setData] = useState()
    const [selectButton, setSelectButton] = useState(0)


    const prevSlide = () => {
            setSelectButton(prevState => prevState - 1)
    }
    const nextSlide = () => {
            setSelectButton(prevState => prevState + 1)
    }

    const links = [
        {
            title: 'Начало',
            href: '',
            id: 1,
            subtitle: 'Начало общения',
            description:
                'При обращении к нам мы знакомимся с заказчиком, продуктом и итоговой целью. Делаем анализ исходных данных и собираем недостающие данные для составления правильного комплекса ресурсов. Далее, если имеем экспертизу в вашем вопросе - предлагаем возможные варианты достижения цели.'
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
                <h2 className="text-[15px] 2xl:text-6xl 2xl:leading-[5.5rem] text-white opacity-90">
                    Забота о клиенте
                </h2>
                <div className="foryou-grid grid 2xl:grid-cols-2">
                    <div className="">
                        <div
                            className="w-full 2xl:w-[85%] text-[11px] 2xl:text-2xl 2xl:leading-9 text-white opacity-90 font-light">
                            Уважая ваше время, для тех кому нужны нюансы ниже сделали сноски, кому
                            это пока не интересно удобно проскролить 1 экран)
                        </div>
                        <div
                            className="foryou-nav mt-6 flex flex-wrap gap-x-2.5 2xl:gap-x-4 gap-y-3 2xl:gap-y-5 text-[6.5px] 2xl:text-xs text-grey-mapbiz">
                            {links.map((item) => {
                                return <button key={item.id} onClick={() => setSelectButton(item.id)}
                                               className={`foryou-nav__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] ${selectButton === item.id ? 'bg-white shadow-white-mapbiz transition duration-300' : ''} `}
                                               href={item.href}>{item.title}</button>
                            })}
                        </div>
                    </div>
                    <div className="foryou-toggle pt-4 2xl:pt-0 flex justify-end h-[265px] 2xl:h-[530px]">
                        {
                            selectButton ? '' : <div
                                className={`${styles.image} foryou-toggle__base w-full 2xl:w-[90%] h-full bg-center bg-cover bg-no-repeat`}
                            />
                        }
                        {links.map((item,index) => {
                            if (item.id === selectButton) {
                                return (
                                    <div style={{position: "relative"}} key={index}
                                        className={`${styles.image__slider} foryou-el flex flex-col justify-center box-border`}>
                                        <h2  className="px-8 text-whitelink-mapbiz foryou-el__title font-medium text-[11px] 2xl:text-2xl leading-7 ">
                                            {item.subtitle}
                                        </h2>
                                        <p className="px-8 text-whitelink-mapbiz foryou-el__content mt-2 2xl:mt-6 text-[11px] 2xl:text-xl">
                                            {item.description}
                                        </p>
                                        {selectButton ? <div className={styles.buttons}>
                                            {selectButton >= 2 ? <button className={styles.button__slider} onClick={prevSlide}></button> : ''}
                                            {selectButton < links.length ? <button className={styles.button__slider_right} onClick={nextSlide}></button> : ''}

                                        </div> : ''}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CareClients;
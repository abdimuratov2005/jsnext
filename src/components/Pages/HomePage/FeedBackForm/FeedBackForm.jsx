'use client'
import React, {useEffect, useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import './FeedBackForm.css'
import InputMask from 'react-input-mask';

const stateCheckBox = [
    {
        name: 'corp',
        text: 'Корпоративный сайт'
    },
    {
        name: 'shop',
        text: 'Интернет магазин'
    },
    {
        name: 'landing',
        text: 'Лендинг'
    },
    {
        name: 'agency',
        text: 'Для агентств недвижимости'
    },
    {
        name: 'hotel',
        text: 'Для отелей'
    },
    {
        name: 'seo',
        text: 'SEO'
    },
    {
        name: 'reklama',
        text: 'Реклама'
    },
    {
        name: 'prodvizhenie',
        text: 'Продвижение'
    },
    {
        name: 'desing',
        text: 'Графика'
    },
    {
        name: '3ddesing',
        text: '3d design '
    },
    {
        name: 'video',
        text: 'Видео'
    },
    {
        name: 'webdesing',
        text: 'Web design'
    },
    {
        name: 'brand',
        text: 'Брендбук'
    },
    {
        name: 'complecks',
        text: 'Комплекс'
    },
]

const socialPhone = [
    {
        social: 'Telegram'
    },
    {
        social: 'WhatsApp'
    },
    {
        social: 'Viber'
    },
]


function FeedBackForm(props) {
    const {register, handleSubmit, watch, reset, formState: {errors, isSubmitSuccessful}} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    useEffect(() => {
        const clearChecked = stateCheckBox.map((item) => {
            return item.name
        })
        if (isSubmitSuccessful) {
            let newData = {
                telephone: '', name: '', Viber: '', WhatsApp: '', Telegram: ''
            }
            clearChecked.map((item) => {
                newData[item] = ''
            })
            reset(newData)
            setCheckedItems([])
        }
    }, [isSubmitSuccessful])

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        console.log(checkedItems)
        const {name, checked} = event.target;

        if (checked) {
            setCheckedItems((prevCheckedItems) => [...prevCheckedItems, name]);
        } else {
            setCheckedItems((prevCheckedItems) =>
                prevCheckedItems.filter((item) => item !== name)
            );
        }
    };


    return (
        <div className='w-[1024px] m-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className='text-white flex flex-col'>
                    Начнем знакомство*
                    <input
                        className='max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-white'
                        name='name' placeholder='Ваше Имя' defaultValue="" {...register("name", {required: true})} />
                </label>
                <div>
                    <label className='text-white flex flex-col'>Какие услуги вам нужны?</label>
                    {stateCheckBox.map((item) => {
                        const isChecked = checkedItems.includes(item.name);
                        const labelClass = isChecked ? 'checkbox-btn checkbox-btn_active' : 'checkbox-btn';
                        return (
                            <label key={item.name} className={`${labelClass} px-4 py-2 rounded-[24px] text-[#808080]`}>
                                <input
                                    {...register(`${item.name}`)}
                                    type="checkbox"
                                    name={item.name}
                                    onChange={handleCheckboxChange}
                                />
                                {item.text}
                            </label>
                        )
                    })}
                </div>

                <label className='text-white flex flex-col'>
                    Как с вами связаться? *
                    <InputMask mask="+7 (999)-999-99-99" type='phone'
                               className={'max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-white'} {...register("telephone", {required: true})} />
                </label>


                <div>
                    <label className='text-white flex flex-col'>Какие услуги вам нужны?</label>
                    {socialPhone.map((item) => {
                        return (
                            <label key={item.social} className={`px-4 py-2 rounded-[24px] text-[#808080]`}>
                                <input
                                    {...register(`${item.social}`)}
                                    type="checkbox"
                                    name={item.social}
                                    onChange={handleCheckboxChange}
                                />
                                {item.social}
                            </label>
                        )
                    })}
                </div>


                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit"/>
            </form>
        </div>
        // <form onSubmit={handleSubmit}
        //       className="feedback max-w-screen-xl mx-auto pt-32 pb-32 flex justify-end font-grotesk-light">
        //     <div className="w-full 2xl:w-11/12 grid gap-y-24">
        //         <div className="grid 2xl:grid-cols-2">
        //             <div className="feedback-form grid gap-y-12 2xl:w-[90%]">
        //                 <div className="feedback-form-name grid gap-y-4 text-xl">
        //                     <label className="text-white" htmlFor="feedback-form-name">
        //                         Начнем знакомство*
        //                     </label>
        //                     <Field
        //                         className="w-[40%] bg-transparent border-b border-whiteline-mapbiz text-whiteline-mapbiz placeholder:text-whiteline-mapbiz"
        //                         placeholder="Ваше Имя"
        //                         name="feedback-form-name"
        //                         id="feedback-form-name"
        //                         type="text"
        //
        //                     />
        //                 </div>
        //                 <div className="feedback-form-services">
        //                     <label
        //                         className="text-xl text-white"
        //                         htmlFor="feedback-form-services"
        //                     >
        //                         Какие услуги вам нужны?
        //                     </label>
        //                     <div
        //                         className="feedback-form-grid mt-6 flex flex-wrap gap-x-4 gap-y-4 text-xs text-grey-mapbiz uppercase">
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={1}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //
        //                         >
        //                             Корпоративный сайт
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={2}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Интернет магазин
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={3}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Лендинг
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={4}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Для агентств недвижимости
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={5}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Для отелей
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={6}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             SEO
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={7}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Реклама
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Продвижение
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Графика
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             3d design
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             Видео
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             web design
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             брендбук
        //                         </a>
        //                         <a
        //                             href="#"
        //                             ffcoder-feedback-el={8}
        //                             className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
        //                         >
        //                             комплекс
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="feedback-form-phone grid gap-y-4 text-xl">
        //                     <label className="text-white" htmlFor="feedback-form-phone">
        //                         Как с вами связаться?*
        //                     </label>
        //                     <input
        //                         className="w-[40%] bg-transparent border-b border-whiteline-mapbiz text-whiteline-mapbiz placeholder:text-whiteline-mapbiz"
        //                         placeholder="Телефон"
        //                         name="feedback-form-phone"
        //                         id="feedback-form-phone"
        //                         type="text"
        //                     />
        //                 </div>
        //                 <div className="feedback-form-social grid gap-y-4 text-xl">
        //                     <label className="text-white" htmlFor="feedback-form-social">
        //                         При номере есть:
        //                     </label>
        //
        //                     <div className="feedback-form-grid flex gap-7 text-whiteline-mapbiz">
        //                         <div
        //                             className="feedback-form-social__el flex flex-wrap items-center gap-2 cursor-pointer">
        //                             <div
        //                                 className="feedback-form-box w-5 h-5 flex justify-center items-center border border-whiteline-mapbiz">
        //                                 <div
        //                                     className="feedback-form-box__active w-3 h-3 bg-whiteline-mapbiz hidden"/>
        //                             </div>
        //                             <div>WhatsApp</div>
        //                         </div>
        //                         <div
        //                             className="feedback-form-social__el flex flex-wrap items-center gap-2 cursor-pointer">
        //                             <div
        //                                 className="feedback-form-box w-5 h-5 flex justify-center items-center border border-whiteline-mapbiz">
        //                                 <div
        //                                     className="feedback-form-box__active w-3 h-3 bg-whiteline-mapbiz hidden"/>
        //                             </div>
        //                             <div>Telegram</div>
        //                         </div>
        //                         <div
        //                             className="feedback-form-social__el flex flex-wrap items-center gap-2 cursor-pointer">
        //                             <div
        //                                 className="feedback-form-box w-5 h-5 flex justify-center items-center border border-whiteline-mapbiz">
        //                                 <div
        //                                     className="feedback-form-box__active w-3 h-3 bg-whiteline-mapbiz hidden"/>
        //                             </div>
        //                             <div>Viber</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="feedback-form-submit flex justify-end">
        //                     <div className="inline-block w-auto">
        //                         <button type='submit'
        //                                 className="btn block py-3 px-10 border border-white rounded-[24px] text-white text-xs bg-center bg-cover bg-no-repeat"
        //                         >
        //                             Начать общение
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div
        //                 className="feedback-movie h-[80%] w-full bg-center bg-cover bg-no-repeat relative"
        //                 style={{backgroundImage: "url(assets/images/home/drakon.gif)"}}
        //             >
        //                 <div
        //                     className="absolute bottom-16 left-0 right-0 mx-auto font-grotesk-medium text-[2rem] text-center">
        //                     <div className="text-crimson-mapbiz">Отжарь конкурентов</div>
        //                     <div className="text-white absolute top-0 left-0 right-0 mx-auto pr-1.5 pt-0.5">
        //                         Отжарь конкурентов
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </form>

    );
}

export default FeedBackForm;
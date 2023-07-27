'use client'
import React, {useEffect, useState} from 'react';
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
    const [hoverBtn, setHoverBtn] = useState(false)
    const {register, handleSubmit, watch, reset, formState: {errors, isSubmitSuccessful, isValid }} = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        console.log(data)
    };
    const hoverBtnChange = () => setHoverBtn(!hoverBtn);
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
        <div className='w-[1024px] m-auto mt-[150px]'>
            <form className={`max-w-[550px]`} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className='text-white flex flex-col'>
                    Начнем знакомство*
                    <input
                        className={`  ${errors?.name ? '!border-b-crimson-mapbiz text-[20px] text-[#808080] max-w-[240px] bg-transparent outline-0 border-b  placeholder:text-[#808080]' : "text-[20px] text-[#808080] max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-[#808080]"} `}
                        name='name' placeholder='Ваше Имя' defaultValue="" {...register("name", {required: true})} />
                </label>
                {errors?.name && <span className={'text-redbright-mapbiz'}>Вы не представились:)</span>}

                <label className='text-white flex flex-col mb-[16px] mt-[40px]'>Какие услуги вам нужны?</label>
                <div className={`flex flex-wrap gap-[8px]`}>
                    {stateCheckBox.map((item) => {
                        const isChecked = checkedItems.includes(item.name);
                        const labelClass = isChecked ? 'checkbox-btn checkbox-btn_active' : 'checkbox-btn';
                        return (
                            <label key={item.name}
                                   className={`${labelClass} px-[16px] py-[8px] text-[14px] rounded-[24px] text-[#808080]`}>
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

                <label className='text-white flex flex-col mt-[40px] mb-[8px]'>
                    Как с вами связаться? *
                    <InputMask mask="+7 (999)-999-99-99" type='phone' placeholder=''
                               className={'max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-[#808080] text-[#808080]'} {...register("telephone", {required: true,  minLength: 18})} />
                </label>
                {errors?.telephone && <span className={'text-redbright-mapbiz'}>Вы не указали номер телефона</span>}


                <div>
                    <label className='text-white flex flex-col mt-[40px] mb-[40px]'>При номере есть:</label>
                    {socialPhone.map((item) => {
                        return (
                            <label key={item.social}
                                   className={`custom-social px-4 py-2 rounded-[24px] text-[#808080] text-[20px]`}>
                                <input
                                    className={`text-[20px]`}
                                    {...register(`${item.social}`)}
                                    type="checkbox"
                                    name={item.social}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                {item.social}
                            </label>
                        )
                    })}
                </div>
                <button
                    disabled={!isValid}
                    onMouseEnter={hoverBtnChange}
                    onMouseLeave={hoverBtnChange} type="submit"
                    className={`${!isValid && 'cursor-not-allowed'} py-3 px-10 border mt-[40px] ${hoverBtn ? ' bg-btn-fone-hover border-crimsondark-mapbiz shadow-neon-mapbiz' : 'bg-btn-fone border-white'}  rounded-[24px] text-white transition-all duration-300`}>Начать
                    общение
                </button>
            </form>
        </div>
    );
}

export default FeedBackForm;
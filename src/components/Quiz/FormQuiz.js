'use client'
import styles from "./Styles.module.scss";
import React, {useContext, useEffect, useState} from "react";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {Controller, useForm} from "react-hook-form";
import PhoneInput from "react-phone-input-2"; // Импортируем файл стилей

export default function FormQuiz({ checkroutes, title, onRoute, checkboxes, radio, inputs, finish, isPost}) {

    //Валидация //
    const {
        language
    } = useContext(DataDevelopContext);

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
    const {register, handleSubmit, setValue, watch, reset, control, formState: {errors, isSubmitSuccessful, isValid }} = useForm({mode: "onChange"});


    const [userAnswer, setUserAnswer]  = useState([])

    const handlePostForm = (data) => {
        isPost([userAnswer, data])
    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            let newData = {
                telephone: '', name: '', Viber: '', WhatsApp: '', Telegram: ''
            }
            reset(newData)
        }
    }, [isSubmitSuccessful])

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target;

        if (checked) {
            setCheckedItems((prevCheckedItems) => [...prevCheckedItems, name]);
        } else {
            setCheckedItems((prevCheckedItems) =>
                prevCheckedItems.filter((item) => item !== name)
            );
        }
    };

    //Валидация //

    const isChecked = (item) => userAnswer.some((answer) => answer[title] === item.title);

    return (
         (
            <form onSubmit={handleSubmit(handlePostForm)}>

                <div className={'flex flex-col'}>
                {checkroutes &&
                    checkroutes.map((item, index) => {
                        return (
                            <label
                                key={item.route}
                                className={`${styles["custom-social"]} px-4 py-2 rounded-[24px] text-[#808080] text-[20px]`}
                            >
                                <input onClick={() => {
                                    onRoute(item.route)
                                    setUserAnswer((prevState) => {
                                        // Проверяем, есть ли элемент с таким "title" в массиве "prevState"
                                        const existingItem = prevState.find((item) => item[title] === radio.title);

                                        if (existingItem) {
                                            // Если элемент уже есть в массиве, то удаляем его
                                            return prevState.filter((item) => item[title] !== radio.title);
                                        } else {
                                            // Если элемента нет в массиве, то добавляем его
                                            return [...prevState, { [title]: item.title }];
                                        }
                                    });
                                }} className={`${styles["text-[20px]"]}`} name={'radio'} type="radio" />
                                <span className={styles["checkmark"]}></span>
                                {item.title}
                            </label>
                        );
                    } )}
                </div>
                {inputs &&
                    inputs.map((inputs, index) => {
                        return (
                            <label key={index}>
                                {inputs.title}
                                <input name={index} placeholder={inputs.placeholder} type={inputs.type} />
                            </label>
                        );
                    })}
                <div className={'flex flex-wrap gap-[8px]'}>
                {checkboxes &&
                    checkboxes.map((checkbox) => {
                        const labelClass = isChecked(checkbox) ? 'checkbox-btn checkbox-btn_active' : 'checkbox-btn';
                        return (
                            <label className={`${labelClass} px-[16px] py-[8px] text-[14px] rounded-[24px] text-[#808080]`} key={checkbox.title}>
                                {checkbox.title}
                                <input
                                    onClick={() => {
                                        setUserAnswer((prevState) => {
                                            // Проверяем, есть ли элемент с таким "title" в массиве "prevState"
                                            const existingItem = prevState.find((item) => item[title] === checkbox.title);

                                            if (existingItem) {
                                                // Если элемент уже есть в массиве, то удаляем его
                                                return prevState.filter((item) => item[title] !== checkbox.title);
                                            } else {
                                                // Если элемента нет в массиве, то добавляем его
                                                return [...prevState, { [title]: checkbox.title }];
                                            }
                                        });
                                    }}
                                    name={checkbox.title}
                                    type="checkbox"
                                />
                            </label>
                        );

                    })}
                </div>
                {radio &&
                    radio.map((radio) => {
                        return (
                            <label className={`${styles["custom-social"]} px-4 py-2 rounded-[24px] text-[#808080] text-[20px]`} key={radio.title}>
                                <input onClick={() => {
                                    setUserAnswer((prevState) => {
                                        // Проверяем, есть ли элемент с таким "title" в массиве "prevState"
                                        const existingItem = prevState.find((item) => item[title] === radio.title);

                                        if (existingItem) {
                                            // Если элемент уже есть в массиве, то удаляем его
                                            return prevState.filter((item) => item[title] !== radio.title);
                                        } else {
                                            // Если элемента нет в массиве, то добавляем его
                                            return [...prevState, { [title]: radio.title }];
                                        }
                                    });
                                }}
                                       name={'radio.title'} type="radio" />
                                <span className={styles["checkmark"]}></span>
                                {radio.title}
                            </label>
                        );
                    })}
                {finish === true &&
                    <div>
                        <p>Получите индивидуальное коммерческое предложение</p>
                        <label htmlFor="name" className='text-white flex flex-col'>
                            Начнем знакомство*
                            <input
                                className={`  ${errors?.name ? '!border-b-crimson-mapbiz text-[20px] text-[#808080] max-w-[240px] bg-transparent outline-0 border-b  placeholder:text-[#808080]' : "text-[20px] text-[#808080] max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-[#808080]"} `}
                                name='name' placeholder='Ваше Имя' defaultValue="" {...register("name", {required: true})} />
                        </label>
                        {errors?.name && <span className={'text-redbright-mapbiz'}>Вы не представились:)</span>}
                        <label className='text-white flex flex-col mt-[40px] mb-[8px]'>
                            Как с вами связаться? *
                            <Controller
                                name="telephone"
                                control={control}
                                defaultValue=''
                                render={({ field }) => (
                                    <PhoneInput
                                        country={language === 'russian' ? 'ru' : 'us'}
                                        enableSearch
                                        {...register("telephone", { required: true })}
                                        {...field}
                                        type="phone"
                                        placeholder=""
                                        inputProps={{
                                            className:
                                                "ml-[50px] max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-[#808080] text-[#808080]",
                                        }}
                                        defaultCountry="RU"
                                        value={field.value} // Добавьте эту строку, чтобы передать значение в PhoneInput
                                        onChange={(value) => field.onChange(value)} // Добавьте эту строку, чтобы обновлять значение формы при изменении номера телефона
                                    />
                                )}
                            />

                        </label>
                        {errors?.telephone && <span className={'text-redbright-mapbiz'}>Вы не указали номер телефона</span>}
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
                        <button type="submit" >
                            отправить
                        </button>
                    </div>

                   }
            </form>
        )
    );
}

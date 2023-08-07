'use client'
import React, {createContext, useState} from 'react';

// Создаем контекст
const DataDevelopContext = createContext();

// Создаем провайдер, который будет оборачивать наше приложение
const DataDevelopProvider = ({children}) => {

    // язык сайта
    const [language, setLanguage] = useState('russian')

    // Верхний таб
    const [buttonsMenu, setButtonsMenu] = useState('develop');
    //Кнопки в табе
    const [currentDescriptionButton, setCurrentDescriptionButton] = useState(0)
    // картинка или описание
    const [isShow, setIsShow] = useState(false)

    const setDataButton = (el) => {
        setButtonsMenu(el);
    };
    const setDataDescriptionButton = (data) => {
        setCurrentDescriptionButton(data)
    }
    const setShow = (data) => {
        setIsShow(data)
    }

    const isLanguage = (lang) => {
        setLanguage(lang)
    }

    // Передаем значения контекста в Provider
    return (
        <DataDevelopContext.Provider
            value={{language, isLanguage, buttonsMenu, setDataButton, currentDescriptionButton, setDataDescriptionButton, isShow, setShow}}>
            {children}
        </DataDevelopContext.Provider>
    );
};

export {DataDevelopContext, DataDevelopProvider};

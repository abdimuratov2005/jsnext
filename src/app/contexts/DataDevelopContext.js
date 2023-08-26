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

    // квиз
    const [isQuizActive, setIsQuizActive] = useState(false)

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

    const setQuiz = (status) => {
        setIsQuizActive(status)
    }

    // Передаем значения контекста в Provider
    return (
        <DataDevelopContext.Provider
            value={{language, isLanguage, buttonsMenu, setDataButton, currentDescriptionButton, setDataDescriptionButton, isShow, setShow, isQuizActive, setQuiz}}>
            {children}
        </DataDevelopContext.Provider>
    );
};

export {DataDevelopContext, DataDevelopProvider};

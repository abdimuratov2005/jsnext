'use client'
import styles from "./Styles.module.scss";
import {useState} from "react"; // Импортируем файл стилей

export default function FormQuiz({ checkroutes, title, onRoute, checkboxes, radio, inputs, finish, isPost}) {

    const [userAnswer, setUserAnswer]  = useState([])

    const handlePostForm = (e) => {
        e.preventDefault()
        return isPost(userAnswer)
    }

    return (
         (
            <form>
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
                                            return [...prevState, { [title]: radio.title }];
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
                {checkboxes &&
                    checkboxes.map((checkbox) => {
                        return (
                            <label key={checkbox.title}>
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
                {radio &&
                    radio.map((radio, index) => {
                        return (

                            <label key={index}>
                                {radio.title}
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
                            </label>
                        );
                    })}
                {finish === true && <form>
                    <div>
                        <h2>Форма</h2>
                        <button type="submit" onClick={handlePostForm}>
                            отправить
                        </button>
                    </div>
                </form>
                   }
            </form>
        )
    );
}

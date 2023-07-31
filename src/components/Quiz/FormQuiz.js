import styles from "./Styles.module.scss"; // Импортируем файл стилей

export default function FormQuiz({ checkbox, inputTypeText, onRoute}) {
    console.log(checkbox)

    return (
         (
            <form>
                <div className={'flex flex-col'}>
                {checkbox &&
                    checkbox.map((item, index) => {
                        return (
                            <label
                                key={item.route}
                                className={`${styles["custom-social"]} px-4 py-2 rounded-[24px] text-[#808080] text-[20px]`}
                            >
                                <input onClick={() => {
                                    onRoute(item.route)
                                }} className={`${styles["text-[20px]"]}`} name={'radio'} type="radio" />
                                <span className={styles["checkmark"]}></span>
                                {item.title}
                            </label>
                        );
                    } )}
                </div>
                {/*{inputTypeText &&*/}
                {/*    inputTypeText.map((checkbox, index) => {*/}
                {/*        return (*/}
                {/*            <label key={index}>*/}
                {/*                {checkbox}*/}
                {/*                <input name={index} type="checkbox" />*/}
                {/*            </label>*/}
                {/*        );*/}
                {/*    })}*/}
            </form>
        )
    );
}

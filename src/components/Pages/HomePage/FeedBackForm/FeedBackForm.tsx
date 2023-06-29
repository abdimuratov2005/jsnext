import React from 'react';

function FeedBackForm(props) {
    return (
        <div className="feedback max-w-screen-xl mx-auto pt-32 pb-32 flex justify-end font-grotesk-light">
            <div className="w-full 2xl:w-11/12 grid gap-y-24">
                <div className="grid 2xl:grid-cols-2">
                    <div className="feedback-form grid gap-y-12 2xl:w-[90%]">
                        <div className="feedback-form-name grid gap-y-4 text-xl">
                            <label className="text-white" htmlFor="feedback-form-name">
                                Начнем знакомство*
                            </label>
                            <input
                                className="w-[40%] bg-transparent border-b border-whiteline-mapbiz text-whiteline-mapbiz placeholder:text-whiteline-mapbiz"
                                placeholder="Ваше Имя"
                                name="feedback-form-name"
                                id="feedback-form-name"
                                type="text"
                            />
                        </div>
                        <div className="feedback-form-services">
                            <label
                                className="text-xl text-white"
                                htmlFor="feedback-form-services"
                            >
                                Какие услуги вам нужны?
                            </label>
                            <div className="feedback-form-grid mt-6 flex flex-wrap gap-x-4 gap-y-4 text-xs text-grey-mapbiz uppercase">
                                <a
                                    href="#"
                                    ffcoder-feedback-el={1}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Корпоративный сайт
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={2}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Интернет магазин
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={3}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Лендинг
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={4}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Для агентств недвижимости
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={5}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Для отелей
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={6}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    SEO
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={7}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Реклама
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Продвижение
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Графика
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    3d design
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    Видео
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    web design
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    брендбук
                                </a>
                                <a
                                    href="#"
                                    ffcoder-feedback-el={8}
                                    className="feedback-form-services__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                >
                                    комплекс
                                </a>
                            </div>
                        </div>
                        <div className="feedback-form-phone grid gap-y-4 text-xl">
                            <label className="text-white" htmlFor="feedback-form-phone">
                                Как с вами связаться?*
                            </label>
                            <input
                                className="w-[40%] bg-transparent border-b border-whiteline-mapbiz text-whiteline-mapbiz placeholder:text-whiteline-mapbiz"
                                placeholder="Телефон"
                                name="feedback-form-phone"
                                id="feedback-form-phone"
                                type="text"
                            />
                        </div>
                        <div className="feedback-form-social grid gap-y-4 text-xl">
                            <label className="text-white" htmlFor="feedback-form-social">
                                При номере есть:
                            </label>
                            <div className="feedback-form-grid flex gap-7 text-whiteline-mapbiz">
                                <div className="feedback-form-social__el flex flex-wrap items-center gap-2 cursor-pointer">
                                    <div className="feedback-form-box w-5 h-5 flex justify-center items-center border border-whiteline-mapbiz">
                                        <div className="feedback-form-box__active w-3 h-3 bg-whiteline-mapbiz hidden" />
                                    </div>
                                    <div>WhatsApp</div>
                                </div>
                                <div className="feedback-form-social__el flex flex-wrap items-center gap-2 cursor-pointer">
                                    <div className="feedback-form-box w-5 h-5 flex justify-center items-center border border-whiteline-mapbiz">
                                        <div className="feedback-form-box__active w-3 h-3 bg-whiteline-mapbiz hidden" />
                                    </div>
                                    <div>Telegram</div>
                                </div>
                                <div className="feedback-form-social__el flex flex-wrap items-center gap-2 cursor-pointer">
                                    <div className="feedback-form-box w-5 h-5 flex justify-center items-center border border-whiteline-mapbiz">
                                        <div className="feedback-form-box__active w-3 h-3 bg-whiteline-mapbiz hidden" />
                                    </div>
                                    <div>Viber</div>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-form-submit flex justify-end">
                            <div className="inline-block w-auto">
                                <a
                                    className="btn block py-3 px-10 border border-white rounded-[24px] text-white text-xs bg-center bg-cover bg-no-repeat"
                                    href="#"
                                >
                                    Начать общение
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="feedback-movie h-[80%] w-full bg-center bg-cover bg-no-repeat relative"
                        style={{ backgroundImage: "url(assets/images/home/drakon.gif)" }}
                    >
                        <div className="absolute bottom-16 left-0 right-0 mx-auto font-grotesk-medium text-[2rem] text-center">
                            <div className="text-crimson-mapbiz">Отжарь конкурентов</div>
                            <div className="text-white absolute top-0 left-0 right-0 mx-auto pr-1.5 pt-0.5">
                                Отжарь конкурентов
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedBackForm;
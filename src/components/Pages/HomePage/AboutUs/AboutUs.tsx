import React from 'react';
import Link from "next/link";

function AboutUs(props) {
    return (
        <div className="about max-w-screen-xl mx-auto pt-24 pb-24 flex justify-end font-grotesk-light text-white-text-new-mapbiz">
            <div className="w-full 2xl:w-11/12 grid gap-y-36">
                <h2 className="text-6xl leading-[5.5rem]">О нас</h2>
                <div className="grid gap-y-16 text-2xl leading-9">
                    <div className="w-[80%]">
                        <p>
                            MaPbiz — IT компания с экспертизой в области цифрового маркетинга и
                            разработки.
                        </p>
                        <p>
                            Наш профиль — создание и развитие проектов в цифровой среде. Графикой
                            вызываем эмоции, трафик конвертируем в прибыль. Реализуем смелые идеи
                            всеми доступными Digital инструментами.
                        </p>
                        <p>
                            Наша миссия - развиваться как часть глобальной цифровой экосистемы,
                            иметь возможности создавать продукты влияющие на восприятие, ниши,
                            тренды своего времени.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div className="w-full 2xl:w-[48%]">
                            <p className="border-b-[3px] border-greyborder-mapbiz pb-8">
                                Не делаем работу ради процесса за который платит клиент, а находим
                                способ достижения конечной цели. Создаем цифровые активы, нацеленные на
                                конкретный результат
                            </p>
                            <Link
                                className="block text-sm font-light mt-6 hover:underline"
                                href={'/contact#form'}>
                                Написать сообщение
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
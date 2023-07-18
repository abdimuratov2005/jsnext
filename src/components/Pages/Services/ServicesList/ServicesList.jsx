'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function ServicesList() {
    return (
        <section className=" relative h-full services  max-w-screen-xl mx-auto pt-48 pb-56  ">
                <ParallaxLayer offset={0}  speed={1.3} >
                    <img  src="/paralax.jpg" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.6} className="services-fone">
                    <div className="flex justify-end font-grotesk-light text-6xl leading-[5.5rem] text-white opacity-90">
                        <div className="services-nav w-6/12
                         gap-y-6 mt-80">
                            <div className="services-nav__el group min-h-[220px]">
                                <a className="flex justify-between items-center" href="#">
                                    <span>Разработка</span>
                                    <svg
                                        className="group-hover:rotate-180 transition-all duration-500"
                                        width={33}
                                        height={50}
                                        viewBox="0 0 33 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6072 22.5974C16.665 16.6905 16.7113 10.7837 16.7894 4.87678C16.8053 3.69945 16.9169 2.52038 17.0561 1.34779C17.0816 1.1538 17.1772 0.970707 17.3304 0.82242C17.4836 0.674133 17.6872 0.567577 17.9148 0.516684C18.2791 0.420387 18.7958 0.755168 18.8718 1.15501C18.9457 1.54278 19.0597 1.92859 19.088 2.31831C19.2702 4.80717 19.528 7.29583 19.5824 9.78707C19.6935 14.9053 19.7213 20.025 19.7284 25.1442C19.7351 30.0011 19.662 34.8582 19.6482 39.715C19.6462 40.4949 19.7645 41.2752 19.8486 42.0537C19.864 42.1054 19.8949 42.153 19.9383 42.1922C19.9817 42.2314 20.0363 42.261 20.0971 42.2782C20.2426 42.2922 20.4874 42.2567 20.5394 42.1768C21.5196 40.6843 22.5505 39.2101 23.4251 37.6753C25.4593 34.105 27.9542 30.7557 30.4573 27.4088C30.8687 26.8588 31.2866 26.2823 32.1028 26.0604C32.2514 26.0201 32.5059 25.9572 32.5556 26.0085C32.7623 26.1921 32.911 26.4153 32.9883 26.658C33.0251 26.9166 32.9746 27.1785 32.8423 27.4146C32.3846 28.2509 31.9071 29.0812 31.394 29.8949C27.7267 35.7104 24.0376 41.5163 20.3802 47.3359C19.0011 49.5311 17.6637 50.5742 14.6316 47.9391C13.7578 47.1799 12.8848 46.4119 12.1076 45.5864C8.49944 41.7578 4.91334 37.9151 1.34927 34.0585C0.889811 33.5281 0.480906 32.969 0.126297 32.3861C-0.122977 32.0059 0.0250871 31.6252 0.323799 31.2969C0.652955 30.9356 1.60999 30.7113 2.03074 30.8359C2.96487 31.1127 3.65021 31.6642 4.27079 32.2564C6.65997 34.5368 9.0319 36.8293 11.3866 39.134C12.9254 40.6317 14.4416 42.1451 15.9836 43.6404C16.0598 43.7143 16.2958 43.7179 16.4379 43.688C16.4993 43.6684 16.5541 43.6366 16.5976 43.5956C16.641 43.5545 16.6717 43.5054 16.6871 43.4523C16.7493 42.671 16.8279 41.8879 16.823 41.1056C16.7836 34.936 16.7345 28.7664 16.6757 22.5967L16.6072 22.5974Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <div className="services-more__nav text-xs text-grey-mapbiz uppercase h-[0px] mt-6 group-hover:h-full overflow-hidden transition-all duration-500">
                                    <div className="services-more__wrapper flex flex-wrap gap-x-4 gap-y-6">
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Корпоративный сайт
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Интернет магазин
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            лэндинг
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Для агентств недвижимости
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Для отелей
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="services-nav__el group min-h-[220px]">
                                <a className="flex justify-between items-center" href="#">
                                    <span>Дизайн</span>
                                    <svg
                                        className="group-hover:rotate-180 transition-all duration-500"
                                        width={33}
                                        height={50}
                                        viewBox="0 0 33 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6072 22.5974C16.665 16.6905 16.7113 10.7837 16.7894 4.87678C16.8053 3.69945 16.9169 2.52038 17.0561 1.34779C17.0816 1.1538 17.1772 0.970707 17.3304 0.82242C17.4836 0.674133 17.6872 0.567577 17.9148 0.516684C18.2791 0.420387 18.7958 0.755168 18.8718 1.15501C18.9457 1.54278 19.0597 1.92859 19.088 2.31831C19.2702 4.80717 19.528 7.29583 19.5824 9.78707C19.6935 14.9053 19.7213 20.025 19.7284 25.1442C19.7351 30.0011 19.662 34.8582 19.6482 39.715C19.6462 40.4949 19.7645 41.2752 19.8486 42.0537C19.864 42.1054 19.8949 42.153 19.9383 42.1922C19.9817 42.2314 20.0363 42.261 20.0971 42.2782C20.2426 42.2922 20.4874 42.2567 20.5394 42.1768C21.5196 40.6843 22.5505 39.2101 23.4251 37.6753C25.4593 34.105 27.9542 30.7557 30.4573 27.4088C30.8687 26.8588 31.2866 26.2823 32.1028 26.0604C32.2514 26.0201 32.5059 25.9572 32.5556 26.0085C32.7623 26.1921 32.911 26.4153 32.9883 26.658C33.0251 26.9166 32.9746 27.1785 32.8423 27.4146C32.3846 28.2509 31.9071 29.0812 31.394 29.8949C27.7267 35.7104 24.0376 41.5163 20.3802 47.3359C19.0011 49.5311 17.6637 50.5742 14.6316 47.9391C13.7578 47.1799 12.8848 46.4119 12.1076 45.5864C8.49944 41.7578 4.91334 37.9151 1.34927 34.0585C0.889811 33.5281 0.480906 32.969 0.126297 32.3861C-0.122977 32.0059 0.0250871 31.6252 0.323799 31.2969C0.652955 30.9356 1.60999 30.7113 2.03074 30.8359C2.96487 31.1127 3.65021 31.6642 4.27079 32.2564C6.65997 34.5368 9.0319 36.8293 11.3866 39.134C12.9254 40.6317 14.4416 42.1451 15.9836 43.6404C16.0598 43.7143 16.2958 43.7179 16.4379 43.688C16.4993 43.6684 16.5541 43.6366 16.5976 43.5956C16.641 43.5545 16.6717 43.5054 16.6871 43.4523C16.7493 42.671 16.8279 41.8879 16.823 41.1056C16.7836 34.936 16.7345 28.7664 16.6757 22.5967L16.6072 22.5974Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <div className="services-more__nav text-xs text-grey-mapbiz uppercase h-[0px] mt-6 group-hover:h-full overflow-hidden transition-all duration-500">
                                    <div className="services-more__wrapper flex flex-wrap gap-x-4 gap-y-6">
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Видео
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Web design
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Брендбук
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Графика
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            3d design
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="services-nav__el group min-h-[220px]">
                                <a className="flex justify-between items-center" href="#">
                                    <span>Маркетинг</span>
                                    <svg
                                        className="group-hover:rotate-180 transition-all duration-500"
                                        width={33}
                                        height={50}
                                        viewBox="0 0 33 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6072 22.5974C16.665 16.6905 16.7113 10.7837 16.7894 4.87678C16.8053 3.69945 16.9169 2.52038 17.0561 1.34779C17.0816 1.1538 17.1772 0.970707 17.3304 0.82242C17.4836 0.674133 17.6872 0.567577 17.9148 0.516684C18.2791 0.420387 18.7958 0.755168 18.8718 1.15501C18.9457 1.54278 19.0597 1.92859 19.088 2.31831C19.2702 4.80717 19.528 7.29583 19.5824 9.78707C19.6935 14.9053 19.7213 20.025 19.7284 25.1442C19.7351 30.0011 19.662 34.8582 19.6482 39.715C19.6462 40.4949 19.7645 41.2752 19.8486 42.0537C19.864 42.1054 19.8949 42.153 19.9383 42.1922C19.9817 42.2314 20.0363 42.261 20.0971 42.2782C20.2426 42.2922 20.4874 42.2567 20.5394 42.1768C21.5196 40.6843 22.5505 39.2101 23.4251 37.6753C25.4593 34.105 27.9542 30.7557 30.4573 27.4088C30.8687 26.8588 31.2866 26.2823 32.1028 26.0604C32.2514 26.0201 32.5059 25.9572 32.5556 26.0085C32.7623 26.1921 32.911 26.4153 32.9883 26.658C33.0251 26.9166 32.9746 27.1785 32.8423 27.4146C32.3846 28.2509 31.9071 29.0812 31.394 29.8949C27.7267 35.7104 24.0376 41.5163 20.3802 47.3359C19.0011 49.5311 17.6637 50.5742 14.6316 47.9391C13.7578 47.1799 12.8848 46.4119 12.1076 45.5864C8.49944 41.7578 4.91334 37.9151 1.34927 34.0585C0.889811 33.5281 0.480906 32.969 0.126297 32.3861C-0.122977 32.0059 0.0250871 31.6252 0.323799 31.2969C0.652955 30.9356 1.60999 30.7113 2.03074 30.8359C2.96487 31.1127 3.65021 31.6642 4.27079 32.2564C6.65997 34.5368 9.0319 36.8293 11.3866 39.134C12.9254 40.6317 14.4416 42.1451 15.9836 43.6404C16.0598 43.7143 16.2958 43.7179 16.4379 43.688C16.4993 43.6684 16.5541 43.6366 16.5976 43.5956C16.641 43.5545 16.6717 43.5054 16.6871 43.4523C16.7493 42.671 16.8279 41.8879 16.823 41.1056C16.7836 34.936 16.7345 28.7664 16.6757 22.5967L16.6072 22.5974Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <div className="services-more__nav text-xs text-grey-mapbiz uppercase h-[0px] mt-6 group-hover:h-full overflow-hidden transition-all duration-500">
                                    <div className="services-more__wrapper flex flex-wrap gap-x-4 gap-y-6">
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Реклама
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            Продвижение
                                        </a>
                                        <a
                                            href="#"
                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                        >
                                            SEO оптимизация
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="services-more__about w-[76%] gap-y-10 text-2xl leading-9 text-white">
                                <p>
                                    На сайте представлена далеко не все направления нашей деятельности.
                                    Есть задача в WEB? - Обращайтесь.
                                </p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

        </section>
    )
}
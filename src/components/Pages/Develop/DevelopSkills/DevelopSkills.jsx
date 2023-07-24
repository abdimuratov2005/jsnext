export default function DevelopSkills(props) {
    return (
        <section
            className="skills-wrapper min-h-screen bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(img/develop/develop-fone3.webp)"
            }}
        >
            <div className="skills max-w-screen-xl mx-auto pt-20 pb-20 flex justify-end font-grotesk-light">
                <div className="w-full grid gap-y-20">
                    <div
                        className="skills-header inline-block w-5/12 relative bg-center bg-cover bg-no-repeat rounded-[20px] shadow-interface-mapbiz select-none"
                        style={{
                            backgroundImage: "url(assets/images/develop/develop-skills-fone.svg)",
                            backdropFilter: "blur(205px)"
                        }}
                    >
                        <div className="">
                            <img
                                className="w-full h-auto -mt-4 cursor-default"
                                src="img/develop/develop-skills-btn-fone1.svg"
                                alt=""
                            />
                            <div className="py-4 px-32 absolute left-0 right-0 mx-auto text-sm text-center -top-4">
                                Меню инструментария
                            </div>
                        </div>
                        <div
                            className="pt-4 pb-4 pl-9 text-2xl text-whitetext-mapbiz tracking-[0.07rem] font-grotesk font-bold">
                            MaPbiz Group
                        </div>
                    </div>
                    <div className="skills-content w-10/12 mx-auto">
                        <div className="skills-content-title w-full relative h-auto select-none">
                            <img
                                className="w-full h-auto cursor-default"
                                src="img/develop/develop-skills-btn-fone2.svg"
                                alt=""
                            />
                            <div
                                className="py-2 px-32 absolute top-0 left-0 right-0 mx-auto text-center text-2xl text-whitetext-mapbiz tracking-[0.07rem] font-grotesk font-bold">
                                Арсенал
                            </div>
                        </div>
                        <div
                            className="skills-content-nav py-10 w-[80%] mx-auto flex justify-evenly text-sm text-whitetext-more-mapbiz uppercase">
                            <a
                                className="develop-skills-nav__el relative px-10 pb-5"
                                href="#"
                                ffcoder-develop-el="develop"
                            >
                                <span className="transition-all duration-300">Разработка</span>
                                <div className="absolute left-0 right-0 mx-auto bottom-0">
                                    <svg
                                        className="base absolute bottom-0 w-full h-auto transition-all duration-300"
                                        width={137}
                                        height={7}
                                        viewBox="0 0 137 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 6L3.59615 1H30.7115L32.4423 3.22222H127.923L129.077 1H136V6H1Z"
                                            stroke="#808080"
                                            strokeOpacity="0.8"
                                        />
                                    </svg>
                                    <svg
                                        className="active absolute -bottom-0.5 w-full h-auto hidden transition-all duration-300"
                                        width={193}
                                        height={19}
                                        viewBox="0 0 193 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_644_823)">
                                            <path
                                                d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                fill="#DCF1EB"
                                                shapeRendering="crispEdges"
                                            />
                                            <path
                                                d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                stroke="url(#paint0_linear_644_823)"
                                                shapeRendering="crispEdges"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_644_823"
                                                x="0.0488281"
                                                y="0.5"
                                                width="192.451"
                                                height={18}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset/>
                                                <feGaussianBlur stdDeviation={3}/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.897059 0 0 0 1 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_644_823"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_644_823"
                                                    result="shape"
                                                />
                                            </filter>
                                            <linearGradient
                                                id="paint0_linear_644_823"
                                                x1="80.6943"
                                                y1="12.6855"
                                                x2="80.6282"
                                                y2="6.98246"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#00FFE5"/>
                                                <stop offset={1} stopOpacity="0.02"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="develop-skills-nav__el relative px-10 pb-5"
                                href="#"
                                ffcoder-develop-el="design"
                            >
                                <span className="transition-all duration-300">Дизайн</span>
                                <div className="absolute left-0 right-0 mx-auto bottom-0">
                                    <svg
                                        className="base absolute bottom-0 w-full h-auto transition-all duration-300"
                                        width={137}
                                        height={7}
                                        viewBox="0 0 137 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 6L3.59615 1H30.7115L32.4423 3.22222H127.923L129.077 1H136V6H1Z"
                                            stroke="#808080"
                                            strokeOpacity="0.8"
                                        />
                                    </svg>
                                    <svg
                                        className="active absolute -bottom-0.5 w-full h-auto hidden transition-all duration-300"
                                        width={193}
                                        height={19}
                                        viewBox="0 0 193 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_644_823)">
                                            <path
                                                d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                fill="#DCF1EB"
                                                shapeRendering="crispEdges"
                                            />
                                            <path
                                                d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                stroke="url(#paint0_linear_644_823)"
                                                shapeRendering="crispEdges"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_644_823"
                                                x="0.0488281"
                                                y="0.5"
                                                width="192.451"
                                                height={18}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset/>
                                                <feGaussianBlur stdDeviation={3}/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.897059 0 0 0 1 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_644_823"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_644_823"
                                                    result="shape"
                                                />
                                            </filter>
                                            <linearGradient
                                                id="paint0_linear_644_823"
                                                x1="80.6943"
                                                y1="12.6855"
                                                x2="80.6282"
                                                y2="6.98246"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#00FFE5"/>
                                                <stop offset={1} stopOpacity="0.02"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="develop-skills-nav__el relative px-10 pb-5"
                                href="#"
                                ffcoder-develop-el="market"
                            >
                                <span className="transition-all duration-300">Маркетинг</span>
                                <div className="absolute left-0 right-0 mx-auto bottom-0">
                                    <svg
                                        className="base absolute bottom-0 w-full h-auto transition-all duration-300"
                                        width={137}
                                        height={7}
                                        viewBox="0 0 137 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 6L3.59615 1H30.7115L32.4423 3.22222H127.923L129.077 1H136V6H1Z"
                                            stroke="#808080"
                                            strokeOpacity="0.8"
                                        />
                                    </svg>
                                    <svg
                                        className="active absolute -bottom-0.5 w-full h-auto hidden transition-all duration-300"
                                        width={193}
                                        height={19}
                                        viewBox="0 0 193 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_644_823)">
                                            <path
                                                d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                fill="#DCF1EB"
                                                shapeRendering="crispEdges"
                                            />
                                            <path
                                                d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                stroke="url(#paint0_linear_644_823)"
                                                shapeRendering="crispEdges"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_644_823"
                                                x="0.0488281"
                                                y="0.5"
                                                width="192.451"
                                                height={18}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset/>
                                                <feGaussianBlur stdDeviation={3}/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.897059 0 0 0 1 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_644_823"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_644_823"
                                                    result="shape"
                                                />
                                            </filter>
                                            <linearGradient
                                                id="paint0_linear_644_823"
                                                x1="80.6943"
                                                y1="12.6855"
                                                x2="80.6282"
                                                y2="6.98246"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#00FFE5"/>
                                                <stop offset={1} stopOpacity="0.02"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="skills-content-grid flex">
                            <div className="skills-content-techno w-[70%] pr-10">
                                <div className="relative">
                                    <div
                                        className="techno-border-left w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div
                                        className="techno-border-right w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute right-1 top-0"/>
                                    <div
                                        className="techno-border-bottom h-[6px] w-[94%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div className="techno-border-el__left absolute left-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-techno-border-left.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="techno-border-el__right absolute right-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-techno-border-right.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="develop-skills-tecno__title relative select-none">
                                        <img
                                            className="w-full h-auto cursor-default"
                                            src="img/develop/develop-skills-btn-fone3.svg"
                                            alt=""
                                        />
                                        <div
                                            className="py-3 px-32 absolute top-0 left-0 right-0 mx-auto text-sm text-center">
                                            Доступные технологии
                                        </div>
                                    </div>
                                    <div
                                        className="develop-skills-techno__wrapper px-8 py-6 h-[350px] overflow-auto font-grotesk-medium text-whitetext-more-mapbiz text-sm text-center">
                                        <div
                                            className="develop-skills-techno__els pb-8"
                                            ffcoder-develop-el="develop"
                                        >
                                            <div className="develop-skills-techno__grid grid grid-cols-5 gap-5">
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="/img/develop/JavaScript.png"
                                                        alt="JavaScript"
                                                    />
                                                    <span>HTML</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className="develop-skills-techno__els pb-8 hidden"
                                            ffcoder-develop-el="design"
                                        >
                                            <div className="develop-skills-techno__grid grid grid-cols-5 gap-5">
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Figma.png"
                                                        alt="Figma"
                                                    />
                                                    <span>Figma</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Photoshop.png"
                                                        alt="Photoshop"
                                                    />
                                                    <span>Photoshop</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Illustrator.png"
                                                        alt="Illustrator"
                                                    />
                                                    <span>Illustrator</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/InDesign.png"
                                                        alt="InDesign"
                                                    />
                                                    <span>InDesign</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/After Effects.png"
                                                        alt="After Effects"
                                                    />
                                                    <span>After Effects</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Blender.png"
                                                        alt="Blender"
                                                    />
                                                    <span>Blender</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Armory3D.png"
                                                        alt="Armory3D"
                                                    />
                                                    <span>Armory3D</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Spline.design.png"
                                                        alt="Spline.design"
                                                    />
                                                    <span>Spline.design</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Stable diffusion.png"
                                                        alt="Stable diffusion"
                                                    />
                                                    <span>Stable diffusion</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Tridiv.png"
                                                        alt="Tridiv"
                                                    />
                                                    <span>Tridiv</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Unreal Engine.png"
                                                        alt="Unreal Engine"
                                                    />
                                                    <span>Unreal Engine</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Verge3D.png"
                                                        alt="Verge3D"
                                                    />
                                                    <span>Verge3D</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Adobe Premiere.png"
                                                        alt="Adobe Premiere"
                                                    />
                                                    <span>Adobe Premiere</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Canva.png"
                                                        alt="Canva"
                                                    />
                                                    <span>Canva</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Corel Draw.png"
                                                        alt="Corel Draw"
                                                    />
                                                    <span>Corel Draw</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Lightroom.png"
                                                        alt="Lightroom"
                                                    />
                                                    <span>Lightroom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="develop-skills-techno__els pb-8 hidden"
                                            ffcoder-develop-el="market"
                                        >
                                            <div className="develop-skills-techno__grid grid grid-cols-5 gap-5">
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Директ.png"
                                                        alt=""
                                                    />
                                                    <span>Директ</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Маркет.png"
                                                        alt=""
                                                    />
                                                    <span>Маркет</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Метрика.png"
                                                        alt=""
                                                    />
                                                    <span>Метрика</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Вебмастер.png"
                                                        alt=""
                                                    />
                                                    <span>Вебмастер</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Wordstat.png"
                                                        alt=""
                                                    />
                                                    <span>Wordstat</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Яндекс Q.png"
                                                        alt=""
                                                    />
                                                    <span>Яндекс Q</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Дзен.png"
                                                        alt=""
                                                    />
                                                    <span>Дзен</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/MyTarget.png"
                                                        alt=""
                                                    />
                                                    <span>MyTarget</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/VK Реклама.png"
                                                        alt=""
                                                    />
                                                    <span>VK Реклама</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/MegaIndex.png"
                                                        alt=""
                                                    />
                                                    <span>MegaIndex</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Topvizor.png"
                                                        alt=""
                                                    />
                                                    <span>Topvizor</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Avito.png"
                                                        alt=""
                                                    />
                                                    <span>Avito</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Google ADS.svg"
                                                        alt=""
                                                    />
                                                    <span>Google ADS</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Facebook.svg"
                                                        alt=""
                                                    />
                                                    <span>Facebook</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Telegram.svg"
                                                        alt=""
                                                    />
                                                    <span>Telegram</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/DevTools.svg"
                                                        alt=""
                                                    />
                                                    <span>DevTools</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Analitica.png"
                                                        alt=""
                                                    />
                                                    <span>Analitica</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Search Console.svg"
                                                        alt=""
                                                    />
                                                    <span>Search Console</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Merchant Center.png"
                                                        alt=""
                                                    />
                                                    <span>Merchant Center</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Page Speed.png"
                                                        alt=""
                                                    />
                                                    <span>Page Speed</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Марквиз.png"
                                                        alt=""
                                                    />
                                                    <span>Марквиз</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Roistat.svg"
                                                        alt=""
                                                    />
                                                    <span>Roistat</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/YouToube.svg"
                                                        alt=""
                                                    />
                                                    <span>YouToube</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/Instagram.svg"
                                                        alt=""
                                                    />
                                                    <span>Instagram</span>
                                                </div>
                                                <div
                                                    className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                    <img
                                                        className="w-[73px] h-[80px]"
                                                        src="assets/images/develop/TikTok.svg"
                                                        alt=""
                                                    />
                                                    <span>TikTok</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skills-content-expert w-[30%]">
                                <div className="relative">
                                    <div
                                        className="techno-border-left w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div
                                        className="techno-border-right w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute right-1 top-0"/>
                                    <div
                                        className="techno-border-bottom h-[6px] w-[90%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div className="techno-border-el__left absolute left-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-expert-border-left.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="techno-border-el__right absolute right-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-expert-border-right.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="develop-skills-expert__title relative select-none">
                                        <img
                                            className="w-full h-auto cursor-default"
                                            src="img/develop/develop-skills-btn-fone4.svg"
                                            alt=""
                                        />
                                        <div
                                            className="py-3 px-4 absolute top-0 left-0 right-0 mx-auto text-sm text-center">
                                            Специалисты
                                        </div>
                                    </div>
                                    <div
                                        className="develop-skills-expert__wrapper px-8 py-6 h-[350px] overflow-auto text-white text-xs text-center">
                                        <div
                                            className="develop-skills-expert__els hidden"
                                            ffcoder-develop-el="develop"
                                        >
                                            <div className="develop-skills-expert__grid grid gap-3">
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Front-end developer</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Back-end developer</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Product manager</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Content manager</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Tester</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="develop-skills-expert__els hidden"
                                            ffcoder-develop-el="design"
                                        >
                                            <div className="develop-skills-expert__grid grid gap-3">
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Art director</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Web designer</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>3d artist</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Motion designer</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>UX/UI designer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="develop-skills-expert__els hidden"
                                            ffcoder-develop-el="market"
                                        >
                                            <div className="develop-skills-expert__grid grid gap-3">
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Targetolog</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>SEO master</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Content manager</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Copywriter</span>
                                                </div>
                                                <div className="develop-skills-expert__el flex items-center gap-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.6392 9.61766C10.5852 9.67155 10.534 9.7277 10.4852 9.78613C10.534 9.84455 10.5852 9.90071 10.6392 9.95459C10.7694 10.0839 10.9132 10.1991 11.0684 10.2989C11.0399 10.1321 11.0246 9.9614 11.0246 9.7867C11.0246 9.61199 11.0399 9.44068 11.0684 9.27392C10.9132 9.37318 10.7694 9.48834 10.6392 9.61823V9.61766ZM12.0165 12.0397C11.6942 11.7436 11.435 11.3801 11.2628 10.9711C10.8529 10.7992 10.488 10.5406 10.1918 10.2189C9.99858 10.578 9.88888 10.9881 9.88888 11.4249C9.88888 11.7017 9.93322 11.9671 10.0145 12.2161C10.264 12.2973 10.5306 12.3415 10.808 12.3415C11.2457 12.3415 11.6567 12.232 12.0165 12.0392V12.0397ZM11.2628 8.60119C11.435 8.19165 11.6942 7.82805 12.0165 7.53196C11.6567 7.3391 11.2457 7.22962 10.808 7.22962C10.5306 7.22962 10.2646 7.27388 10.0151 7.35499C9.93378 7.604 9.88945 7.87003 9.88945 8.14684C9.88945 8.58361 9.99915 8.99372 10.1924 9.35277C10.4891 9.03115 10.8535 8.7725 11.2633 8.60062L11.2628 8.60119ZM12.4502 12.3716C11.975 12.6728 11.4123 12.8475 10.808 12.8475C10.6329 12.8475 10.4613 12.8322 10.2942 12.8038C10.3936 12.9586 10.509 13.1022 10.6392 13.232C11.1036 13.6949 11.7419 13.9808 12.4502 13.9808C13.1585 13.9808 13.7968 13.6949 14.2612 13.232C14.3908 13.1022 14.5062 12.9586 14.6063 12.8038C14.4391 12.8322 14.2681 12.8475 14.093 12.8475C13.4887 12.8475 12.9254 12.6722 12.4508 12.3716H12.4502ZM9.4256 7.63463C9.27042 7.7339 9.12661 7.84905 8.99644 7.97894C8.5326 8.44237 8.24611 9.07993 8.24611 9.7867C8.24611 10.4935 8.5326 11.1305 8.99644 11.5939C9.12661 11.7232 9.27042 11.8384 9.4256 11.9382C9.39718 11.7714 9.38183 11.6001 9.38183 11.4254C9.38183 10.8225 9.55748 10.2603 9.85875 9.7867C9.55692 9.31306 9.38183 8.75094 9.38183 8.14798C9.38183 7.97327 9.39718 7.80196 9.4256 7.6352V7.63463ZM12.4502 7.82521C12.3917 7.87399 12.3354 7.92506 12.2814 7.97894C12.1512 8.10884 12.0358 8.25234 11.9364 8.40719C12.1035 8.37883 12.2751 8.36351 12.4502 8.36351C12.6253 8.36351 12.797 8.37883 12.9641 8.40719C12.8646 8.25234 12.7492 8.10884 12.619 7.97894C12.565 7.92506 12.5088 7.87399 12.4502 7.82521ZM13.3694 9.78613C13.3694 9.50932 13.325 9.24386 13.2437 8.99428C12.9942 8.91316 12.7276 8.86892 12.4502 8.86892C12.1728 8.86892 11.9068 8.91316 11.6567 8.99428C11.5754 9.24329 11.5311 9.50932 11.5311 9.78613C11.5311 10.0629 11.5754 10.3284 11.6567 10.5774C11.9062 10.6585 12.1728 10.7028 12.4502 10.7028C12.7276 10.7028 12.9936 10.6585 13.2437 10.5774C13.325 10.3284 13.3694 10.0624 13.3694 9.78613ZM14.0924 7.23019C13.6547 7.23019 13.2437 7.33967 12.8839 7.53253C13.2062 7.82862 13.4654 8.19222 13.6377 8.60176C14.0475 8.77363 14.4124 9.03172 14.7086 9.35391C14.9018 8.99485 15.0116 8.58474 15.0116 8.14798C15.0116 7.87117 14.9672 7.60513 14.8859 7.35611C14.6364 7.275 14.3698 7.23076 14.093 7.23076L14.0924 7.23019ZM11.9364 11.1656C12.0358 11.3205 12.1512 11.464 12.2814 11.5939C12.3354 11.6478 12.3917 11.6988 12.4502 11.7476C12.5088 11.6988 12.565 11.6478 12.619 11.5939C12.7486 11.464 12.864 11.3205 12.9641 11.1656C12.797 11.194 12.6253 11.2093 12.4502 11.2093C12.2751 11.2093 12.1035 11.194 11.9369 11.1656H11.9364ZM15.4743 7.63463C15.5027 7.8014 15.518 7.9727 15.518 8.14741C15.518 8.75037 15.3424 9.31249 15.0405 9.78613C15.3424 10.2598 15.5175 10.8219 15.518 11.4249C15.518 11.5996 15.5027 11.7709 15.4743 11.9376C15.6294 11.8384 15.7732 11.7232 15.9034 11.5933C16.3672 11.1299 16.6537 10.4923 16.6537 9.78613C16.6537 9.07936 16.3672 8.4418 15.9034 7.97837C15.7732 7.84905 15.6294 7.73389 15.4743 7.63406V7.63463ZM14.2612 9.95459C14.3152 9.90071 14.3664 9.84455 14.4153 9.78613C14.3664 9.7277 14.3152 9.67155 14.2612 9.61766C14.1311 9.48834 13.9872 9.37318 13.8321 9.27392C13.8605 9.44068 13.8758 9.61142 13.8758 9.7867C13.8758 9.9614 13.8605 10.1321 13.8321 10.2989C13.9872 10.1996 14.1311 10.0845 14.2612 9.95516V9.95459ZM13.6377 10.9711C13.4654 11.3801 13.2062 11.7442 12.8839 12.0397C13.2437 12.2326 13.6547 12.3421 14.0924 12.3421C14.3698 12.3421 14.6358 12.2978 14.8854 12.2167C14.9666 11.9677 15.011 11.7017 15.011 11.4254C15.011 10.9887 14.9013 10.5786 14.708 10.2195C14.4113 10.5411 14.0469 10.7998 13.6371 10.9716L13.6377 10.9711ZM18.7962 6.57278C19.6198 8.0039 19.713 9.53088 19.3146 11.1044C19.0707 12.0675 18.6455 12.9473 18.0276 13.7278C17.4308 14.4817 17.2318 15.3427 17.2637 16.2871C17.3091 17.64 17.6462 18.9287 18.0651 20.2033C18.0873 20.2702 18.126 20.3366 18.126 20.403C18.126 20.4591 18.1828 20.5153 18.1578 20.5714L9.09932 20.5555C8.99246 20.1568 8.82193 19.6202 8.71905 19.2197C8.68096 19.0717 8.64572 18.9231 8.60764 18.775C8.52749 18.4636 8.31489 18.2997 8.00396 18.2753C7.56514 18.2413 7.12347 18.239 6.68521 18.1976C6.45954 18.176 6.23104 18.1221 6.01845 18.0427C5.54608 17.8669 5.20844 17.2713 5.29654 16.7761C5.32383 16.6252 5.3909 16.4687 5.48015 16.3433C5.59497 16.1822 5.59156 16.0727 5.42729 15.9627C5.36419 15.9207 5.31019 15.864 5.25733 15.8095C5.02256 15.5696 5.01516 15.3478 5.2306 15.0863C5.25049 15.0619 5.27096 15.0381 5.27835 15.029C5.14875 14.8617 5.00892 14.7125 4.91058 14.5389C4.86965 14.4669 4.8975 14.3359 4.93274 14.2468C4.97594 14.1362 5.06803 14.0466 5.12317 13.9394C5.20389 13.7834 5.15671 13.6977 4.99584 13.6342C4.82475 13.5661 4.65137 13.4969 4.49278 13.4045C4.11307 13.1844 4.00905 12.8038 4.22619 12.4232C4.31657 12.2644 4.43821 12.1214 4.55304 11.9768C4.88954 11.5531 5.2289 11.131 5.56939 10.7107C5.78369 10.4458 5.8303 10.1622 5.77971 9.81903C5.62737 8.78214 5.79961 7.77757 6.28107 6.85185C7.00922 5.45136 8.17733 4.5211 9.62114 3.92891C10.7665 3.45981 11.967 3.36962 13.1926 3.45981C14.2123 3.53526 15.2037 3.71733 16.1467 4.1229C17.3194 4.62717 18.1697 5.48597 18.7944 6.57278H18.7962ZM17.1608 9.7867C17.1608 8.51553 16.3849 7.42588 15.2798 6.96246C14.8154 5.85976 13.7235 5.08607 12.4502 5.08607C11.1769 5.08607 10.085 5.86033 9.62058 6.96302C8.51556 7.42645 7.73965 8.5161 7.73965 9.7867C7.73965 11.0573 8.51556 12.1469 9.62058 12.6104C10.0844 13.7131 11.1764 14.4868 12.4502 14.4873C13.7235 14.4873 14.816 13.7131 15.2798 12.6109C16.3849 12.1475 17.1608 11.0579 17.1608 9.78726V9.7867ZM12.4502 7.20126C12.9254 6.90006 13.4882 6.72536 14.0924 6.72536C14.2675 6.72536 14.4386 6.74068 14.6057 6.76904C14.5062 6.61418 14.3908 6.47067 14.2607 6.34078C13.7963 5.87792 13.1573 5.59204 12.4496 5.59204C11.7414 5.59204 11.103 5.87792 10.6386 6.34078C10.509 6.47067 10.3936 6.61418 10.2942 6.76904C10.4613 6.74068 10.6324 6.72536 10.808 6.72536C11.4123 6.72536 11.9756 6.90063 12.4502 7.20126Z"
                                                            fill="white"
                                                            fillOpacity="0.8"
                                                        />
                                                        <rect
                                                            x="0.228571"
                                                            y="0.228571"
                                                            width="23.5429"
                                                            height="23.5429"
                                                            rx="0.771429"
                                                            stroke="white"
                                                            strokeOpacity="0.8"
                                                            strokeWidth="0.457143"
                                                        />
                                                    </svg>
                                                    <span>Growth Hacker</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-content-btns w-[65%] flex gap-8 mt-14 text-whitetext-more-mapbiz">
                            <div className="skills-content-btn w-auto inline-block">
                                <a className="block relative" href="#">
                                    <img
                                        className="base"
                                        src="assets/images/develop/develop-skills-btns.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover hidden"
                                        src="assets/images/develop/develop-skills-btns-active.svg"
                                        alt=""
                                    />
                                    <span
                                        className="absolute w-full top-0 bottom-0 my-auto flex items-center justify-center text-center">
                Смотреть портфолио
              </span>
                                </a>
                            </div>
                            <div className="skills-content-btn w-auto inline-block">
                                <a className="block relative" href="#">
                                    <img
                                        className="base"
                                        src="assets/images/develop/develop-skills-btns.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover hidden"
                                        src="assets/images/develop/develop-skills-btns-active.svg"
                                        alt=""
                                    />
                                    <span
                                        className="absolute w-full top-0 bottom-0 my-auto flex items-center justify-center text-center">
                Начать работу
              </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
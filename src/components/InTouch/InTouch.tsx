import React from 'react';

function InTouch(props) {
    return (
        <div className="intouch fixed bottom-10 left-10 font-grotesk text-[11px] text-whitetext-mapbiz">
            <div className="intouch-list pb-4 z-10 grid gap-y-2 overflow-hidden">
                <a
                    href="#"
                    className="intouch-list-el block hover:underline -translate-y-[2.5rem] -rotate-[18deg] opacity-0"
                >
                    Telegram
                </a>
                <a
                    href="#"
                    className="intouch-list-el block hover:underline -translate-y-[2.5rem] -rotate-[18deg] opacity-0"
                >
                    WhatsApp
                </a>
                <a
                    href="#"
                    className="intouch-list-el block hover:underline -translate-y-[2.5rem] -rotate-[18deg] opacity-0"
                >
                    Vkontakte
                </a>
                <a
                    href="#"
                    className="intouch-list-el block hover:underline -translate-y-[2.5rem] -rotate-[18deg] opacity-0"
                >
                    Behance
                </a>
                <a
                    href="#"
                    className="intouch-list-el block hover:underline -translate-y-[2.5rem] -rotate-[18deg] opacity-0"
                >
                    Dribbble
                </a>
                <a
                    href="#"
                    className="intouch-list-el block hover:underline -translate-y-[2.5rem] -rotate-[18deg] opacity-0"
                >
                    LinkedIn
                </a>
            </div>
            <div className="intouch-intro flex items-center gap-x-5 cursor-pointer select-none">
                <div className="intouch-btn w-[50px] h-[50px] relative">
                    <svg
                        className="w-full absolute top-0 bottom-0 left-0 right-0 m-auto"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 46 46"
                        enableBackground="new 0 0 46 46"
                    >
                        <circle
                            cx={23}
                            cy={23}
                            r={22}
                            stroke="rgba(255,255,255,.2)"
                            strokeWidth={2}
                            fill="transparent"
                        />
                    </svg>
                    <svg
                        className="w-full absolute top-0 bottom-0 left-0 right-0 m-auto"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 46 46"
                        enableBackground="new 0 0 46 46"
                    >
                        <circle
                            id="intouch-hover"
                            cx={23}
                            cy={23}
                            r={22}
                            stroke="white"
                            strokeWidth={2}
                            fill="transparent"
                        />
                    </svg>
                    <svg
                        className="w-4 absolute top-0 bottom-0 left-0 right-0 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z"
                            fill="#fff"
                        />
                    </svg>
                </div>
                <div className="intouch-title underline">на связи</div>
            </div>
        </div>
    );
}

export default InTouch;
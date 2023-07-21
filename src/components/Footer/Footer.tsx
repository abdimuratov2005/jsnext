import React from 'react';
import Link from "next/link";

interface FooterProps {
    // Определите типы для пропсов, если они присутствуют
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="bg-darkgrey-mapbiz  w-full justify-center align-middle">
            <div
                className="footer-wrapper w-full max-w-screen-xl mx-auto py-5 flex items-center justify-center flex-wrap lg:flex-nowrap font-grotesk-light text-xs text-greywhite-mapbiz">
                <div className="flex justify-between w-full">
                    <div className="text-left">Копирование любой информации с сайта запрещено</div>
                    <div className="text-center">Copyright @ 2023</div>
                    <Link href="/personally" className="text-right">Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

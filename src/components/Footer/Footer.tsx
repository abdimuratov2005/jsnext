import React from 'react';

interface FooterProps {
    // Определите типы для пропсов, если они присутствуют
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="bg-darkgrey-mapbiz">
            <div
                className="footer-wrapper max-w-screen-xl mx-auto py-5 flex items-center flex-wrap lg:flex-nowrap font-grotesk-light text-xs text-greywhite-mapbiz">
                <div className="footer-grid grid 2xl:grid-cols-3">
                    <div className="text-left">Копирование любой информации с сайта запрещено</div>
                    <div className="text-center">Copyright @ 2023</div>
                    <a href="#" className="text-right">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

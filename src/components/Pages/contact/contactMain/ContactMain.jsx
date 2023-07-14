import Image from "next/image";

export default function ContactMain() {
    return (
        <section className='w-full max-w-[1280px] flex justify-end relative'>
            <div style={{backgroundImage: `url(/img/contact/fon.jpg)`}} className='bg-no-repeat bg-center bg-cover h-[469px] p-[30px] rounded-[20px] w-[538px] flex flex-col gap-5 relative'>
                <img className='absolute left-[2%] bottom-[2%] select-none' src="/img/contact/leftArrow.svg" alt=""/>
                <img className='absolute rotate-[180deg] right-[3%] top-[15%]'  src="/img/contact/leftArrow.svg" alt=""/>
                <h1 style={{backgroundImage: `url(/img/contact/titleBacground.svg)`}} className='text-2xl text-whitetext-mapbiz bg-cover bg-no-repeat w-full h-full bg-center text-center'>Контакты MaPbiz Group</h1>
                <div className={'flex items-center gap-[16px]  '}>
                    <Image width={17.418} height={28.8} src={'/img/contact/phone.svg'} alt={'телефон'}></Image>
                    <Image width={30.4} height={30.508} src={'/img/contact/whatsapp.svg'} alt={'телефон'}></Image>
                    <a className={'text-whitetext-mapbiz'} href='tel:+7 989 240-0897'>+7 989 240-0897</a>
                </div>
                <div className={'flex items-center gap-[16px] '}>
                    <Image width={28.8} height={23.36} src={'/img/contact/mail.svg'}
                           alt={'почта mapbiz mapbiz@yandex.ru'}>
                    </Image>
                    <a className={'text-whitetext-mapbiz'}
                       href='malito:mapbiz@yandex.ru'>mapbiz@yandex.ru</a>
                </div>
                <div className={'flex items-center gap-[16px] '}>
                    <Image width={26.6} height={26.6} src={'/img/contact/map.svg'}
                           alt={'расположение mapBiz'}>
                    </Image>
                    <p className={'text-whitetext-mapbiz'}>Краснодарский край, г. Анапа, ул. Краснозеленых 29/5</p>
                </div>
                <div className={'flex items-center gap-[16px] '}>
                    <Image width={32} height={32} src={'/img/contact/suitcase.svg'}
                           alt={'юр информация mapBiz'}>
                    </Image>
                    <p className={'text-whitetext-mapbiz'}>ИП Пеклич Юрий Евгеньевич
                        ОГРНИП 320237500078157</p>
                </div>
                <p className={'text-whitetext-mapbiz mt-4'}>Будем на связи </p>
                <div className={'flex items-center gap-[16px] mt-4'}>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/vk.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/instagram.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/facebook.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/ball.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/telegram.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/youtube.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                    <a href="">
                        <Image
                            width={32}
                            height={32}
                            src={'/img/contact/ri_behance-line.svg'}
                            alt={'юр информация mapBiz'}>
                        </Image>
                    </a>
                </div>
            </div>
        </section>
    )
}
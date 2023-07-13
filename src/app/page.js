import HomePageMain from "@/components/Pages/HomePage/HomePageMain/HomePageMain";
import Services from "@/components/Pages/HomePage/Services/Services";
import RunTimeLine from "@/components/RunTimeLine/RunTimeLine";
import CareClients from "@/components/Pages/HomePage/CareClients/CareClients";
import AboutUs from "@/components/Pages/HomePage/AboutUs/AboutUs";
import InTouch from "@/components/InTouch/InTouch";
import API from "@/Api/Api";
import FeedBackForm from '../components/Pages/HomePage/FeedBackForm/FeedBackForm'
import Clients from "@/components/Pages/HomePage/Clients/Clients";
import Team from "@/components/Pages/HomePage/Team/Team";
import Video from "@/components/Video/Video";

async function getData () {
    const ulr = 'https://прибыльный-сайт.рф/wp-json/'
    return async () => {
        try {
            const api = new API(ulr); // Замените URL на свой базовый URL API
            return await api.get('wp/v2/posts/39')

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export default async function Page() {
    const data = await getData();
    const textik = '                - Потребность - Эмоции - Страхи - Ожидания - Условия - Потребность - Эмоции\n' +
        '                - Страхи - Ожидания - Условия - Потребность - Эмоции - Страхи - Ожидания -\n' +
        '                Условия - Потребность - Эмоции - Страхи - Ожидания - Условия'


    return (
        <>
            <HomePageMain/>
            <Video></Video>
            <Services/>
            <RunTimeLine
                text={textik}/>
            <CareClients/>
            <RunTimeLine
                text={'                - Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне предлагают? - Кто исполнитель?\n' +
                    '                - Как они это сделают? - Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне\n' +
                    '                предлагают? - Кто исполнитель? - Как они это сделают?'}/>
            <AboutUs/>
            <Team/>
            <Clients/>
            <RunTimeLine
                text={'  - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект - Давайте обсудим проект -\n' +
                    '                Связаться с нами - Давайте обсудим проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим\n' +
                    '                проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект'}/>
            <FeedBackForm/>
            <InTouch/>
        </>
    )
}

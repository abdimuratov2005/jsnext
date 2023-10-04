import HomePageMain from "@/components/Pages/HomePage/HomePageMain/HomePageMain";
import Services from "@/components/Pages/HomePage/Services/Services";
import RunTimeLine from "@/components/RunTimeLine/RunTimeLine";
import AboutUs from "@/components/Pages/HomePage/AboutUs/AboutUs";
import InTouch from "@/components/InTouch/InTouch";
import API from "@/Api/Api";
import FeedBackForm from '../components/Pages/HomePage/FeedBackForm/FeedBackForm'
import Clients from "@/components/Pages/HomePage/Clients/Clients";
import Team from "@/components/Pages/HomePage/Team/Team";
import Video from "@/components/Video/Video";
import CareClients from "@/components/Pages/HomePage/CareClients/CareClients";
import NextPage from "@/components/NextPage/NextPage";
import Canvas from "@/components/Canvas/Canvas";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

async function getData() {

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

    const runLineTexts = [
        '- Потребность - Эмоции - Страхи - Ожидания - Условия - Потребность - Эмоции - Страхи - Ожидания - Условия - Потребность - Эмоции - Страхи - Ожидания - Условия - Потребность - Эмоции - Страхи - Ожидания - Условия',
        '- Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне предлагают? - Кто исполнитель? - Как они это сделают?',
        '- Давайте обсудим проект - Связаться с нами - Давайте обсудим проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект'
    ]

    return (
        <>
            <Header />
            <HomePageMain/>
            <Video/>


            <Services/>
            <RunTimeLine
                text={runLineTexts[0]}/>
            <CareClients/>
            <RunTimeLine
                text={runLineTexts[1]}/>
            <AboutUs/>
            <Team/>
            <Clients/>
            <RunTimeLine
                text={runLineTexts[2]}/>
            <FeedBackForm/>
            <NextPage url="/services" image="/img/home/from-home-to-services.webp"></NextPage>
            <InTouch/>
            <Footer />


        </>
    )
}

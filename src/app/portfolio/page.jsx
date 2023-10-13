import NextPage from "@/components/NextPage/NextPage";
import PortfolioPopup from "@/components/Pages/Portfolio/PortfolioPopup";
import PortfolioMain from "@/components/Pages/Portfolio/PortfolioMain/PortfolioMain";
import Header from "@/components/Header/Header";
import InTouch from "@/components/InTouch/InTouch";
import Footer from "@/components/Footer/Footer";
import axios from "axios";

export const metadata = {
    title: 'MapBiz - Portfolio',
    description: 'MapBiz - Portfolio',
}


// получение ссылок на портфолио
async function getPortfolio() {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/';
    try {
        const res = await axios.get(url);
        return res.data.fields.content[0].els.map((link) => {
            return link
        });

    } catch (error) {
        console.log(error);
        return [];
    }
}
// получение ссылок на портфолио

export default async function Portfolio() {
    const data = await getPortfolio();
    return (
        <>
            <Header/>
            <PortfolioMain data={data}/>
            <NextPage url={'/contact'} image={`/img/portfolio/next-portfolio.webp`}></NextPage>
            <PortfolioPopup/>
            <InTouch/>
            <Footer/>
        </>
    );
}
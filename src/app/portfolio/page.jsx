import NextPage from "@/components/NextPage/NextPage";
import PortfolioPopup from "@/components/Pages/Portfolio/PortfolioPopup";
import PortfolioMain from "@/components/Pages/Portfolio/PortfolioMain/PortfolioMain";
import Header from "@/components/Header/Header";
import InTouch from "@/components/InTouch/InTouch";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    title: 'MapBiz - Portfolio',
    description: 'MapBiz - Portfolio',
}

export default function Portfolio() {

    return (
        <>
            <Header />
            <PortfolioMain />
            <NextPage url={'/contact'} image={`/img/portfolio/next-portfolio.webp`}></NextPage>
            <PortfolioPopup />
            <InTouch />
            <Footer />
        </>
    );
}
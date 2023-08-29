import NextPage from "@/components/NextPage/NextPage";
import PortfolioPopup from "@/components/Pages/Portfolio/PortfolioPopup";
import PortfolioMain from "@/components/Pages/Portfolio/PortfolioMain/PortfolioMain";

export const metadata = {
    title: 'MapBiz - Portfolio',
    description: 'MapBiz - Portfolio',
}

export default function Portfolio() {

    return (
        <>
            <PortfolioMain />
            <NextPage url={'/contact'} image={`/img/portfolio/next-portfolio.webp`}></NextPage>
            <PortfolioPopup />
        </>
    );
}

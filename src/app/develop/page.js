import DevelopUnits from "@/components/Pages/Develop/DevelopUnits/DevelopUnits";
import DevelopSkills from "@/components/Pages/Develop/DevelopSkills/DevelopSkills";
import NextPage from "@/components/NextPage/NextPage";
import InTouch from "@/components/InTouch/InTouch";

export default function Page(props) {

    return (
            <div className={'overflow-hidden'}>
                <DevelopUnits />
                <DevelopSkills />
                <NextPage url="/portfolio" image="/img/develop/next-develop.webp"></NextPage>
                <InTouch/>
            </div>
    );
}

import DevelopUnits from "@/components/Pages/Develop/DevelopUnits/DevelopUnits";
import DevelopSkills from "@/components/Pages/Develop/DevelopSkills/DevelopSkills";

export default function Page(props) {

    return (
        <div className={'overflow-hidden'}>
        <DevelopUnits />
        <DevelopSkills />
        </div>
    );
}

import React from 'react';
import PersonalyMain from "@/components/Pages/Personaly/personalyMain";
import NextPage from "@/components/NextPage/NextPage";

function Page(props) {
    return (
        <>
            <PersonalyMain />
            <NextPage url={'/'} image={`/img/personally/next-personally.webp`}></NextPage>
        </>
    );
}

export default Page;
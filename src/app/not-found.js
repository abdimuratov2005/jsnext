import React from "react";
import NextPage from "@/components/NextPage/NextPage";
import NotFoundMain from "@/components/Pages/NotFound/NotFoundMain";
import NotFoundPopup from "@/components/Pages/NotFound/NotFoundPopup";

export default function Custom404() {
    return (
        <>
            <NotFoundMain />
            <NotFoundPopup />
            <NextPage url={'/'} image={`/img/404/next-404.webp`}></NextPage>
        </>
    )
}
import ContactMain from "@/components/Pages/contact/contactMain/ContactMain";
import ContactFormPage from "@/components/Pages/contact/contactForm/ContactFormPage";
import NextPage from "@/components/NextPage/NextPage";

export default function contact() {
    return (
        <>
            <main style={{backgroundImage: `url(/img/contact/contact.jpg)`}}
                  className='pt-[230px] bg-cover bg-no-repeat bg-center h-screen flex justify-center relative'>
                <img src="/img/contact/solder.svg" className='absolute bottom-0 right-auto' alt=""/>
                <ContactMain></ContactMain>
            </main>
            <ContactFormPage></ContactFormPage>
            <NextPage></NextPage>
        </>

    )
}
import './globals.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import localFont from 'next/font/local'
import Head from 'next/head';


const cygrotesk = localFont({
    src: [
        {
            path: '../../public/fonts/cy-grotesk-wide-light.ttf',
            weight: '300'
        },
        {
            path: '../../public/fonts/cy-grotesk-wide-regular.ttf',
            weight: '400',
        },
        {
            path: '../../public/fonts/cy-grotesk-wide-medium.ttf',
            weight: '500',
        },
        {
            path: '../../public/fonts/cy-grotesk-wide-demi.ttf',
            weight: '600',
        },
        {
            path: '../../public/fonts/cy-grotesk-wide-bold.ttf',
            weight: '700',
        },

    ],
    variable: '--font-cygrotesk'
})






export const metadata = {
    title: 'MapBiz - создание сайтов в Анапе',
    description: 'Главная',
}



export default function RootLayout({ children }) {
  return (
      <html className={`${cygrotesk.variable} font-sans`} lang="ru">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}


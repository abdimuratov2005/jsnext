import './globals.css';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata = {
    title: 'MapBiz - создание сайтов в Анапе',
    description: 'Главная',
}



export default function RootLayout({ children }) {
  return (
      <html lang="ru">
      <body className={'font-Grotesk'}>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}


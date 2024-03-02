import {ReactNode} from "react";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import "../globals.css"
export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={'font-yekan'}>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}
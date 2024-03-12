import {ReactNode} from "react";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import "../globals.css"
export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}
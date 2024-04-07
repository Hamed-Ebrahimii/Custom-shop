import {ReactNode} from "react";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import "../globals.css"
import Nav from "@/component/nav";
export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <>
        <Header/>
            <Nav/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}
"use client"
import React, {ReactNode, useState} from "react";
import Sidebar from "@/app/(admin)/admin/component/sidebar";
import { Bars4Icon } from "@heroicons/react/24/solid";
import LogoMobile from "@/component/layout/header/icon/logo-mobile";
import dynamic from "next/dynamic";
 function RootLayout({children}: Readonly<{
    children: ReactNode;

}>) {
    const [handleOpen , setHandleOpen] = useState(false)
    return (
        <>
        <header className="w-full  bg-white shadow-md md:hidden flex items-center justify-between px-3 py-4">
            <button onClick={()=> setHandleOpen(!handleOpen)}>
                <Bars4Icon className="size-8 text-black font-bold"/>
            </button>
            <LogoMobile/>
        </header>
            <div className={'w-full flex md:gap-6 md:pl-6 mt-5 mx-auto'}>
                
                <div className={`${handleOpen ? 'block' : 'hidden'} z-30 absolute w-full md:static md:block md:w-1/6`}>
                    <Sidebar/>
                </div>
                <>
                        {children}
                </>
                
            </div>
        </>
    );
}
export default dynamic(() => Promise.resolve(RootLayout), { ssr: false })

import type { Metadata } from "next";
import "../../globals.css";
import React, {ReactNode} from "react";
import Sidebar from "@/app/(admin)/admin/component/sidebar";
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{
    children: ReactNode;

}>) {
    return (
            <div className={'w-full flex gap-6 pl-6 mt-5'}>
                <div className={'w-1/6'}>
                    <Sidebar/>
                </div>
                <>
                        {children}
                </>
                
            </div>
    );
}

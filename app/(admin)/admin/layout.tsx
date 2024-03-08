import type { Metadata } from "next";
import "../../globals.css";
import React, {ReactNode} from "react";
import {ThemeProvider} from "../../../component/material";
import Sidebar from "@/app/(admin)/admin/component/sidebar";
import Query from "@/component/query";
import {theme} from "@/component/material/theme";
import Provider from "@/component/provider";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{
    children: ReactNode;

}>) {
    return (
        <html lang="fa" dir={'rtl'}>
        <ThemeProvider value={theme}>
        <body className={'font-yekan bg-gray-custom'}>
            <div className={'w-full flex gap-6 pl-6 mt-5'}>
                <div className={'w-1/6'}>
                    <Sidebar/>
                </div>
                <Query>
                        {children}
                </Query>
            </div>
        </body>
        </ThemeProvider>
        </html>
    );
}

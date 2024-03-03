"use client"
import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient()
export default function RootLayout({children}: Readonly<{
    children: ReactNode;

}>) {
    return (
        <QueryClientProvider client={client}>
        <div className={'w-full h-screen fixed top-0 z-30'}>
            {children}
        </div>
        </QueryClientProvider>
    );
}

import {ReactNode} from "react";
import "./globals.css"
import Query from "@/component/query";
import { ThemeProvider } from "../component/material";
import { theme } from "@/component/material/theme";
import ReduxProvider from "@/redux/provider";
export default function RootLayout({children,}: {
    children: ReactNode
}) {
    
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={'font-yekan'}>
            <ReduxProvider>
            <Query>
                <ThemeProvider value={theme}>
                    <>
                    {children}
                    </>
                </ThemeProvider>
            </Query>
            </ReduxProvider>
        </body>
        </html>
    )
}
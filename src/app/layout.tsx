'use client'

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

import "./globals.css";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Order your pizza for the FSI/K Sommerfest 2024"/>

            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <title>🍕 FSI/K Sommerfest Pizza</title>
        </head>
        <body>
        <main className="max-h-full min-h-screen flex flex-col">
            <Header/>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg my-5 w-full max-w-4xl mx-auto">
                {children}
            </div>
            <Footer/>
        </main>
        </body>
        </html>
    );
}
